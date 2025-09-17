import React, { useState, useEffect } from 'react';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-black/10 backdrop-blur-md border-b border-gray-200/20 z-[200]">
      <div className="flex justify-between items-center px-4 h-[40px]">
        <button 
          onClick={() => handleNavClick('hero')} 
          className={`text-2xl font-bold transition-colors ${
            activeSection === 'hero' 
              ? 'text-white' 
              : 'text-blue-600 hover:text-gray-300'
          }`}
        >
          Clythra
        </button>
        <button 
          className="flex flex-col justify-between w-7 h-5 bg-transparent border-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-full h-0.5 bg-white transition-all transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <div className={`absolute top-[40px] left-0 right-0 bg-black/10 backdrop-blur-md border-b border-gray-200/20 px-4 py-4 transform transition-all duration-300 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
      }`}>
        <div className="flex flex-col space-y-4">
          <button 
            onClick={() => handleNavClick('hero')}
            className={`font-medium px-4 py-2 rounded-md transition-all text-left border-l-2 ${
              activeSection === 'hero'
                ? 'text-white border-white'
                : 'text-gray-300 border-transparent hover:text-gray-100 hover:border-gray-300'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className={`font-medium px-4 py-2 rounded-md transition-all text-left border-l-2 ${
              activeSection === 'about'
                ? 'text-white border-white'
                : 'text-gray-300 border-transparent hover:text-gray-100 hover:border-gray-300'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('services')}
            className={`font-medium px-4 py-2 rounded-md transition-all text-left border-l-2 ${
              activeSection === 'services'
                ? 'text-white border-white'
                : 'text-gray-300 border-transparent hover:text-gray-100 hover:border-gray-300'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className={`font-medium px-4 py-2 rounded-md transition-all text-left border-l-2 ${
              activeSection === 'contact'
                ? 'text-white border-white'
                : 'text-gray-300 border-transparent hover:text-gray-100 hover:border-gray-300'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
