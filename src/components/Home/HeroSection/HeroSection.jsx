import React from 'react';
import homepageImage from '../homepage2.jpg';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      style={{ backgroundImage: `url(${homepageImage})` }}
      className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative [filter:grayscale(100%)]"
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="absolute top-0 left-0 text-white z-10 p-8">
        <h1 className="text-[20rem] font-black mb-4 tracking-tight leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '-0.05em' }}>
          ADITYA
        </h1>
        <p className="text-2xl font-thin tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          Resume
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
