import React from 'react';

function Contact() {
  return (
    <section className="h-screen w-full bg-gradient-to-r from-red-500 to-yellow-600 flex items-center justify-center text-white px-4 pt-[70px]">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Clythra</h1>
          <p className="text-xl md:text-2xl mb-8">Your journey begins here</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </section>
  );
}

export default Contact;
