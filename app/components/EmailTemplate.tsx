
import React from 'react';

interface EmailTemplateProps {
  data: {
    referralType: string | string[];
    referrerName: string;
    referrerOrganization?: string;
    referrerEmail: string;
    referrerPhone: string;
    clientName: string;
    clientAge: string;
    reasonForReferral: string;
    servicesInterested: string | string[];
    consent: boolean;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  },
  referral: boolean;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  data, referral
}) => {
  console.log({data, referral});
  return referral ? (
    <div> 
      <h2>New Referral Submission</h2>
      <p><strong>Referral Type:</strong> {Array.isArray(data.referralType) ? data.referralType.join(", ") : data.referralType || "N/A"}</p>
      <p><strong>Referrer Name:</strong> {data.referrerName}</p>
      <p><strong>Organization:</strong> {data.referrerOrganization || "N/A"}</p>
      <p><strong>Email:</strong> {data.referrerEmail}</p>
      <p><strong>Phone:</strong> {data.referrerPhone}</p>
      <hr />
      <p><strong>Client Name:</strong> {data.clientName}</p>
      <p><strong>Client Age:</strong> {data.clientAge}</p>
      <p><strong>Reason for Referral:</strong> {data.reasonForReferral}</p>
      <p><strong>Services Interested In:</strong> {Array.isArray(data.servicesInterested) ? data.servicesInterested.join(", ") : data.servicesInterested || "N/A"}</p>
      <p><strong>Consent Given:</strong> {data.consent ? "Yes" : "No"}</p>
    </div>
  ) : (
    <div>
      <h2>New Contact Submission</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Subject:</strong> {data.subject}</p>
      <p><strong>Message:</strong> {data.message}</p>
    </div>
  );
};

export default EmailTemplate;
