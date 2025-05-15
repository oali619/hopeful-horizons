
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-autism-powder-apricot">
      <div className="mb-4 text-autism-soft-coral">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      <p className="italic text-autism-sienna-gray mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-autism-peach-cream flex items-center justify-center text-autism-clay-taupe font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium text-autism-clay-taupe">{author}</p>
          {role && <p className="text-sm text-autism-sienna-gray">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
