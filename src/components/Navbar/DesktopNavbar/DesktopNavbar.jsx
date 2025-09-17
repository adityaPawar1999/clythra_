import React, { useState, useEffect } from 'react';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';

const DesktopNavbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 50 && rect.bottom >= 50;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="hidden lg:flex fixed top-0 left-0 right-0 h-[40px] bg-black/10 backdrop-blur-md shadow-md px-8 items-center z-[200]">
      {/* Logo on the left */}
      <div className="flex-none">
        <button 
          onClick={() => scrollToSection('hero')} 
          className={`text-3xl font-bold transition-colors ${
            activeSection === 'hero' 
              ? 'text-white' 
              : 'text-blue-600 hover:text-white'
          }`}
        >
          Clythra
        </button>
      </div>

      {/* Navigation links on the right */}
      <div className="flex-1 flex justify-end items-center">
        <div className="flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')} 
            className={`font-medium px-3 py-2 rounded-md transition-all ${
              activeSection === 'hero'
                ? 'text-blue-600 bg-white'
                : 'text-white hover:text-blue-600 hover:bg-white/90'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`font-medium px-3 py-2 rounded-md transition-all ${
              activeSection === 'about'
                ? 'text-green-600 bg-white'
                : 'text-white hover:text-green-600 hover:bg-white/90'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className={`font-medium px-3 py-2 rounded-md transition-all ${
              activeSection === 'services'
                ? 'text-purple-600 bg-white'
                : 'text-white hover:text-purple-600 hover:bg-white/90'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`font-medium px-3 py-2 rounded-md transition-all ${
              activeSection === 'contact'
                ? 'text-orange-400 bg-white'
                : 'text-white hover:text-orange-400 hover:bg-white/90'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
