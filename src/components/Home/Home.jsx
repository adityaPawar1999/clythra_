import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import MenuIcon from '@mui/icons-material/Menu';
const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="h-screen w-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Clythra<MenuIcon /></h1>
          <p className="text-xl md:text-2xl mb-8">Your journey begins here</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Get Startedim
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
