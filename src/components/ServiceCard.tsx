
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
    <div className="hopeful-card h-full p-6 flex flex-col">
      {icon && (
        <div className="mb-4 text-hopeful-seafoam-mist">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-hopeful-charcoal-brown">{title}</h3>
      <p className="text-hopeful-slate-sage flex-grow">{description}</p>
      {link && (
        <div className="mt-4 pt-2">
          <span className="hopeful-link">Learn more</span>
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
