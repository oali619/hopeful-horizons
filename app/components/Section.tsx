
import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'alternate';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  color = 'default',
  id,
}) => {
  const bgColor = color === 'alternate' ? 'bg-autism-powder-apricot/20' : 'bg-white';

  return (
    <section id={id} className={`py-12 md:py-16 ${bgColor} ${className}`}>
      <div className="autism-container">
        {(title || subtitle) && (
          <div className="mb-10 text-center max-w-3xl mx-auto">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-autism-clay-taupe mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-autism-sienna-gray">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
