
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { renderToString } from 'react-dom/server';
import { EmailTemplate } from '../src/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;

  try {
    // Render React component to HTML string
    const emailHtml = renderToString(
      EmailTemplate({ data })
    );

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'Hopeful Horizons <referrals@hopefulhorizonsmn.com>',
      to: ['admin@hopefulhorizonsmn.com'],
      subject: "New Referral Submission",
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, id: emailData?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
