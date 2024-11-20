import React from 'react';
import Navbar from "../Navbar/Navbar";
import './Hero.css';  // Import the CSS file

function Hero() {
  return (
    <div id="hero" className="hero">
      <Navbar />
      
      <div className="hero-container hero-container-lg">
        {/* Profile Picture with Border and Shadow */}
        <div className="hero-profile hero-profile-visible">
          <div className="profile-picture"
               style={{
                 backgroundImage: "url('/profile3.png')"
               }}>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="hero-text hero-text-sm">
          <div>
            <p>I'm</p>
            <p>Asim</p>
            <p>Hussain</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;