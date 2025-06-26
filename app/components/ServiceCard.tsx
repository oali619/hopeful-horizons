
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  const content = (
    <div className="autism-card h-full p-6 flex flex-col">
      {icon && (
        <div className="mb-4 text-autism-bright-blue">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-autism-sienna-gray flex-grow">{description}</p>
      {link && (
        <div className="mt-4 pt-2">
          <span className="autism-link">Learn more</span>
        </div>
      )}
    </div>
  );

  if (link) {
    return <Link to={link} className="block h-full">{content}</Link>;
  }

  return content;
};

export default ServiceCard;
