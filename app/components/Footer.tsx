
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-autism-powder-apricot text-autism-clay-taupe">
      <div className="autism-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-autism-peach-cream flex items-center justify-center text-autism-clay-taupe font-bold">HH</div>
              <span className="text-xl font-bold">Hopeful Horizons</span>
            </div>
            <p className="max-w-xs">
              Supporting individuals and families affected by autism with compassion, understanding, and expertise.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-autism-soft-coral transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-autism-soft-coral transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-autism-soft-coral transition-colors">Services</Link></li>
              <li><Link to="/resources" className="hover:text-autism-soft-coral transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-autism-soft-coral transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <address className="not-italic space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-autism-soft-coral" />
                <span>1710 Douglas Dr. Ste 225E Golden Valley, MN 55422</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-autism-soft-coral" />
                <a href="tel:+16122222817" className="hover:text-autism-soft-coral transition-colors">
                  (612) 222-2817
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-autism-soft-coral" />
                <a href="mailto:admin@hopefulhorizonsmn.com" className="hover:text-autism-soft-coral transition-colors">
                  admin@hopefulhorizonsmn.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-autism-sienna-gray mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Hopeful Horizons LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
