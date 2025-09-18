import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import MenuIcon from '@mui/icons-material/Menu';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      
      {/* About Section */}
      <section 
        id="about" 
        className="h-screen w-full bg-gradient-to-r from-green-500 to-blue-600"
      >
        <About />
      </section>
      
      {/* Services Section */}
      <section 
        id="services" 
        className="h-screen w-full bg-gradient-to-r from-purple-500 to-pink-600"
      >
        <Services />
      </section>
      
      {/* Contact Section */}
      <section 
        id="contact" 
        className="h-screen w-full bg-gradient-to-r from-orange-500 to-red-600"
      >
        <Contact />
      </section>
    </div>
  );
};

export default Home;
