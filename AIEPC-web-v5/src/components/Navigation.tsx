import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMember } = useAppContext();
  const navLinks = [
    { name: 'Members', href: '/members' },
    { name: 'Companies', href: '/companies' },
    { name: 'Events', href: '/campaigns' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm h-18">
      <div className="max-w-7xl mx-auto px-6 py-4 h-full flex items-center">
         <div className="flex items-center justify-between w-full">
          {/* Logo */}
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="flex items-center">
                <img 
                  src="https://d64gsuwffb70l.cloudfront.net/685ae5e3b337a227e19d0c6a_1757831158035_228b8841.png" 
                  alt="AIEPC Logo" 
                   className="w-[2.675rem] h-16 mr-3"
                />
                <span className="text-[#00308f] font-bold text-xl">AIEPC</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#00308f] font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            {isMember && (
              <a
                href="/dashboard"
                className="text-gray-700 hover:text-[#00308f] font-medium transition-colors duration-200"
              >
                Dashboard
              </a>
            )}
          </div>

          {/* Join Union Button or Dashboard */}
          <div className="hidden md:block">
            {isMember ? (
              <Button 
                className="bg-[#5D8AA8] text-white hover:bg-[#00308f] font-semibold px-6 py-2 rounded-xl"
                onClick={() => window.location.href = '/dashboard'}
              >
                Dashboard
              </Button>
            ) : (
              <Button 
                className="bg-[#00308f] text-white hover:bg-[#5D8AA8] font-semibold px-6 py-2 rounded-xl"
                onClick={() => window.location.href = '/join'}
              >
                JOIN
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-[#00308f]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-[#00308f] font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {isMember && (
                <a
                  href="/dashboard"
                  className="text-gray-700 hover:text-[#00308f] font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </a>
              )}
              {isMember ? (
                <Button 
                  className="bg-[#5D8AA8] text-white hover:bg-[#00308f] font-semibold px-6 py-2 rounded-xl w-full mt-4"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  Dashboard
                </Button>
              ) : (
                <Button 
                  className="bg-[#00308f] text-white hover:bg-[#5D8AA8] font-semibold px-6 py-2 rounded-xl w-full mt-4"
                  onClick={() => window.location.href = '/join'}
                >
                  JOIN
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;