import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import MenuIcon from '@mui/icons-material/Menu';
import homepageImage from './homepage2.jpg';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        id="hero" 
        style={{ backgroundImage: `url(${homepageImage})` }}
        className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="text-center text-white px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Clythra<MenuIcon /></h1>
          <p className="text-xl md:text-2xl mb-8">Your journey begins here</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Started
          </button>
        </div>
      </section>
      
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
