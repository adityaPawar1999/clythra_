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
    <nav className="hidden lg:flex fixed top-0 left-0 right-0 h-[40px] bg-black/10 backdrop-blur-md border-b border-gray-200/20 px-8 items-center z-[200]">
      {/* Logo on the left */}
      <div className="flex-none">
        <button 
          onClick={() => scrollToSection('hero')} 
          className={`text-3xl font-bold transition-colors ${
            activeSection === 'hero' 
              ? 'text-white' 
              : 'text-blue-600 hover:text-gray-300'
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
            className={`font-medium px-3 py-2 rounded-md transition-all border-b-2 ${
              activeSection === 'hero'
                ? 'text-white border-white'
                : 'text-gray-300 border-transparent hover:text-gray-100 hover:border-gray-300'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`font-medium px-3 py-2 rounded-md transition-all border-b-2 ${
              activeSection === 'about'
                ? 'text-white border-white'
                : 'text-gray-300 border-transparent hover:text-gray-100 hover:border-gray-300'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className={`font-medium px-3 py-2 rounded-md transition-all border-b-2 ${
              activeSection === 'services'
                ? 'text-white border-white'
                : 'text-gray-300 border-transparent hover:text-gray-100 hover:border-gray-300'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`font-medium px-3 py-2 rounded-md transition-all border-b-2 ${
              activeSection === 'contact'
                ? 'text-white border-white'
                : 'text-gray-300 border-transparent hover:text-gray-100 hover:border-gray-300'
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
