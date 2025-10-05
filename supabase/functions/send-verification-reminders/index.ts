export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY');
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!SENDGRID_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing required environment variables');
    }

    // Calculate time windows (24h and 72h ago)
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const seventyTwoHoursAgo = new Date(now.getTime() - 72 * 60 * 60 * 1000);
    
    // 1-hour window for matching
    const window = 60 * 60 * 1000;

    // Query unverified users from auth.users
    const authResponse = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'apikey': SUPABASE_SERVICE_ROLE_KEY
      }
    });

    if (!authResponse.ok) {
      throw new Error('Failed to fetch users');
    }

    const { users } = await authResponse.json();
    
    // Filter unverified users
    const unverifiedUsers = users.filter((user: any) => 
      !user.email_confirmed_at && user.email
    );

    const remindersSent = [];

    for (const user of unverifiedUsers) {
      const createdAt = new Date(user.created_at);
      const timeSinceCreation = now.getTime() - createdAt.getTime();
      
      let reminderType = null;
      
      // Check if user needs 24-hour reminder
      if (Math.abs(timeSinceCreation - (24 * 60 * 60 * 1000)) < window) {
        reminderType = '24_hour';
      }
      // Check if user needs 72-hour reminder
      else if (Math.abs(timeSinceCreation - (72 * 60 * 60 * 1000)) < window) {
        reminderType = '72_hour';
      }

      if (reminderType) {
        // Check if reminder already sent
        const checkResponse = await fetch(
          `${SUPABASE_URL}/rest/v1/verification_reminders?user_id=eq.${user.id}&reminder_type=eq.${reminderType}`,
          {
            headers: {
              'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
              'apikey': SUPABASE_SERVICE_ROLE_KEY
            }
          }
        );

        const existingReminders = await checkResponse.json();
        
        if (existingReminders.length === 0) {
          // Send reminder email via SendGrid
          const emailData = {
            personalizations: [{
              to: [{ email: user.email }],
              subject: reminderType === '24_hour' 
                ? 'Reminder: Verify Your AIEPC Account'
                : 'Final Reminder: Verify Your AIEPC Account'
            }],
            from: { email: 'noreply@aiepc.org', name: 'AIEPC' },
            content: [{
              type: 'text/html',
              value: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2>Verify Your Email Address</h2>
                  <p>Hi there,</p>
                  <p>We noticed you haven't verified your email address yet. Please verify your email to access all AIEPC member benefits.</p>
                  <p>If you didn't receive the verification email, you can request a new one by visiting our verification page.</p>
                  <p>Thank you,<br>The AIEPC Team</p>
                </div>
              `
            }]
          };

          const sendGridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${SENDGRID_API_KEY}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailData)
          });

          if (sendGridResponse.ok) {
            // Log reminder sent
            await fetch(`${SUPABASE_URL}/rest/v1/verification_reminders`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                'apikey': SUPABASE_SERVICE_ROLE_KEY,
                'Content-Type': 'application/json',
                'Prefer': 'return=minimal'
              },
              body: JSON.stringify({
                user_id: user.id,
                email: user.email,
                reminder_type: reminderType
              })
            });

            remindersSent.push({ email: user.email, type: reminderType });
          }
        }
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        remindersSent,
        totalUnverified: unverifiedUsers.length
      }),
      { headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
});