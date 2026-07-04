import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './Home.css';
import myPhoto from '../assets/niyati.jpg';
export function Home() {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        {/* Main Heading */}
        <h1 className="hero-title">
          hi, <span className="highlight-name">Niyati</span> here.
        </h1>
<br/>
        {/* Description Bio */}
        <p className="hero-description">
          I am a student at an engineering college, 
          currently pursuing a learning 
          internship at Elite forums ,
          I am learning React & JavaScript at my 
          internship place, making my skills better day by day.
          I love to code stuff,grading, & sketching in my free time.
        </p>

        {/* CTA Button */}
        <a href="mailto:niyatipatil828@gmail.com" className="cta-button">
          <FaEnvelope className="button-icon" />
          <span> Say hi!</span>
        </a>
            <div className="hero-image-container">
          <img src={myPhoto} alt="Niyati" className="hero-profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;