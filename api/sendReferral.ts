import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;

  try {
    await resend.emails.send({
      from: 'admin@hopefulhorizonsmn.com',
      to: 'admin@hopefulhorizonsmn.com',
      subject: "New Referral Submission",
      html: `
        <div>
          <h2>New Referral Submission</h2>
          <p><strong>Referral Type:</strong> ${Array.isArray(data.referralType) ? data.referralType.join(", ") : data.referralType || "N/A"}</p>
          <p><strong>Referrer Name:</strong> ${data.referrerName}</p>
          <p><strong>Organization:</strong> ${data.referrerOrganization || "N/A"}</p>
          <p><strong>Email:</strong> ${data.referrerEmail}</p>
          <p><strong>Phone:</strong> ${data.referrerPhone}</p>
          <hr />
          <p><strong>Client Name:</strong> ${data.clientName}</p>
          <p><strong>Client Age:</strong> ${data.clientAge}</p>
          <p><strong>Reason for Referral:</strong> ${data.reasonForReferral}</p>
          <p><strong>Services Interested In:</strong> ${Array.isArray(data.servicesInterested) ? data.servicesInterested.join(", ") : data.servicesInterested || "N/A"}</p>
          <p><strong>Consent Given:</strong> ${data.consent ? "Yes" : "No"}</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}