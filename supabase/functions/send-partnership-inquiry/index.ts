export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, company, message } = await req.json();

    const SENDGRID_API_KEY = Deno.env.get('SENDGRID_API_KEY');
    
    if (!SENDGRID_API_KEY) {
      throw new Error('SendGrid API key not configured');
    }

    // Email to admin (adam@aiepc.org)
    const adminEmail = {
      personalizations: [{
        to: [{ email: 'adam@aiepc.org' }],
        subject: 'New Partnership Inquiry - AIEPC Resources'
      }],
      from: { 
        email: 'noreply@aiepc.org',
        name: 'AIEPC Resources'
      },
      content: [{
        type: 'text/html',
        value: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00308f;">New Partnership Inquiry</h2>
            <p>A service provider has expressed interest in partnering with AIEPC in the resources area.</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #666; font-size: 12px; margin-top: 30px;">
              This email was sent from the AIEPC Resources partnership inquiry form.
            </p>
          </div>
        `
      }]
    };

    // Confirmation email to service provider
    const confirmationEmail = {
      personalizations: [{
        to: [{ email: email }],
        subject: 'Thank You for Your Partnership Inquiry - AIEPC'
      }],
      from: { 
        email: 'noreply@aiepc.org',
        name: 'AIEPC Resources'
      },
      content: [{
        type: 'text/html',
        value: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00308f;">Thank You for Your Interest!</h2>
            <p>Dear ${name},</p>
            
            <p>Thank you for expressing interest in partnering with the Advocacy, Innovation, Ethics, and Policy Council (AIEPC). We have received your partnership inquiry and appreciate you taking the time to reach out.</p>
            
            <div style="background-color: #f0f7ff; padding: 20px; border-left: 4px solid #00308f; margin: 20px 0;">
              <p style="margin: 0;"><strong>What happens next?</strong></p>
              <p style="margin: 10px 0 0 0;">Our team will review your inquiry and get back to you within 2-3 business days to discuss potential partnership opportunities.</p>
            </div>
            
            <p>In the meantime, feel free to explore our resources and learn more about our mission at <a href="https://aiepc.org" style="color: #00308f;">aiepc.org</a>.</p>
            
            <p>Best regards,<br>
            <strong>The AIEPC Team</strong></p>
            
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
            
            <p style="color: #666; font-size: 12px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        `
      }]
    };

    // Send both emails
    const [adminResponse, confirmationResponse] = await Promise.all([
      fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminEmail),
      }),
      fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(confirmationEmail),
      })
    ]);

    if (!adminResponse.ok) {
      const errorText = await adminResponse.text();
      throw new Error(`SendGrid API error (admin email): ${errorText}`);
    }

    if (!confirmationResponse.ok) {
      const errorText = await confirmationResponse.text();
      throw new Error(`SendGrid API error (confirmation email): ${errorText}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Partnership inquiry sent successfully' }),
      { headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (error) {
    console.error('Error sending partnership inquiry:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
});