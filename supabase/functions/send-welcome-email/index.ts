export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type'
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email, firstName, lastName, duesType, membershipTier } = await req.json();
    
    const sendGridApiKey = Deno.env.get("SENDGRID_API_KEY");
    
    if (!sendGridApiKey) {
      throw new Error("SendGrid API key not configured");
    }

    const dashboardUrl = "https://your-domain.com/ai-member-dashboard";
    
    const duesInfo = {
      monthly: "$20 / Month (Standard Plan)",
      reduced: "$10 / Month (Reduced Income Plan)",
      annual: "$200 / Year (Save 15%)"
    };

    const emailHtml = getEmailTemplate(firstName, lastName, duesInfo[duesType] || duesType, membershipTier, dashboardUrl);

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${sendGridApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email }],
          subject: "Welcome to AIEPC - Your Membership is Active!"
        }],
        from: {
          email: "membership@aiepc.org",
          name: "AIEPC Membership Team"
        },
        content: [{
          type: "text/html",
          value: emailHtml
        }]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`SendGrid error: ${error}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Welcome email sent successfully" }),
      { headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});

function getEmailTemplate(firstName: string, lastName: string, duesType: string, membershipTier: string, dashboardUrl: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #667eea; }
    .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
    .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to AIEPC!</h1>
      <p>Your membership is now active</p>
    </div>
    <div class="content">
      <p>Dear ${firstName} ${lastName},</p>
      <p>Congratulations! You are now an <strong>Active Member</strong> of the AI Employee Protection Collective (AIEPC).</p>
      
      <div class="info-box">
        <h3>Your Membership Details</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Membership Tier:</strong> ${membershipTier}</p>
        <p><strong>Dues Plan:</strong> ${duesType}</p>
      </div>

      <div class="info-box">
        <h3>How Your Dues Are Used</h3>
        <ul>
          <li><strong>30%:</strong> Legal defense</li>
          <li><strong>25%:</strong> Employee organizing & outreach</li>
          <li><strong>25%:</strong> Training & education programs</li>
          <li><strong>20%:</strong> Operations</li>
        </ul>
        <p style="font-size: 12px; color: #666;">(Dues allocations will change as needs change.)</p>
      </div>

      <p>Access your member dashboard to explore benefits, resources, and connect with other members:</p>
      
      <center>
        <a href="${dashboardUrl}" class="button">Access Member Dashboard</a>
      </center>

      <p>If you have any questions or need assistance, please don't hesitate to reach out to our membership team.</p>

      <p>Thank you for joining us in protecting AI workers' rights!</p>
      
      <p>Solidarity,<br><strong>The AIEPC Team</strong></p>
    </div>
    <div class="footer">
      <p>© 2025 AI Employee Protection Collective. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;
}
