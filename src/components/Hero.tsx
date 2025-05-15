
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = "Learn More",
  ctaLink = "/about",
  image,
}) => {
  return (
    <div className="relative bg-autism-warm-mist overflow-hidden">
      <div className="autism-container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-autism-clay-taupe leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-autism-sienna-gray">
              {subtitle}
            </p>
            {ctaText && (
              <div className="pt-4">
                <Link to={ctaLink} className="autism-btn-primary inline-block">
                  {ctaText}
                </Link>
              </div>
            )}
          </div>
          
          <div className="order-first md:order-last flex justify-center md:justify-end animate-fade-in">
            {image ? (
              <img 
                src={image} 
                alt="Autism Center MN" 
                className="rounded-lg max-h-[400px] w-auto object-cover shadow-lg border-4 border-white"
              />
            ) : (
              <div className="aspect-video w-full max-w-lg bg-autism-peach-cream rounded-lg flex items-center justify-center text-autism-clay-taupe">
                <span className="text-xl font-semibold">Autism Center MN</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
