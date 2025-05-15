
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hopeful-glacier-mist text-hopeful-slate-fjord">
      <div className="hopeful-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-hopeful-blue-breeze flex items-center justify-center text-hopeful-slate-fjord font-bold">HH</div>
              <span className="text-xl font-bold">Hopeful Horizons</span>
            </div>
            <p className="max-w-xs">
              Supporting individuals and families affected by autism with compassion, understanding, and expertise.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-hopeful-frosted-sky transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-hopeful-frosted-sky transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-hopeful-frosted-sky transition-colors">Services</Link></li>
              <li><Link to="/resources" className="hover:text-hopeful-frosted-sky transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-hopeful-frosted-sky transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <address className="not-italic space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-hopeful-frosted-sky" />
                <span>123 Autism Ave, Minneapolis, MN 55401</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-hopeful-frosted-sky" />
                <a href="tel:+16125551234" className="hover:text-hopeful-frosted-sky transition-colors">
                  (612) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-hopeful-frosted-sky" />
                <a href="mailto:info@hopefulhorizons.org" className="hover:text-hopeful-frosted-sky transition-colors">
                  info@hopefulhorizons.org
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-hopeful-cool-granite mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Hopeful Horizons. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
