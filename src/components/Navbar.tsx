
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Resources", path: "/resources" },
    { title: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-autism-powder-apricot sticky top-0 z-50 shadow-sm">
      <div className="autism-container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-autism-peach-cream flex items-center justify-center text-autism-clay-taupe font-bold">AC</div>
          <span className="text-xl font-bold text-autism-clay-taupe">Autism Center MN</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-autism-clay-taupe hover:text-autism-soft-coral transition-colors ${
                isActive(link.path) ? "font-semibold border-b-2 border-autism-peach-cream" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-autism-clay-taupe p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-autism-powder-apricot">
          <div className="autism-container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-autism-clay-taupe hover:text-autism-soft-coral transition-colors py-2 ${
                  isActive(link.path) ? "font-semibold border-l-4 pl-2 border-autism-peach-cream" : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
