import React from 'react';
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <div className="relative">
        <Home />
      </div>
    </div>
  )
}

export default App
