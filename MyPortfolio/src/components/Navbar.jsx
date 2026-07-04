import React from 'react';
import './Navbar.css';
import { FaRegEnvelope, FaGithub } from 'react-icons/fa';

export function Navbar(){

    return(
       <nav className="navbar">
         <div className="nav-container-left">
        <a href="/" className="brand-name">Niyati</a>
        
        <ul className="nav-links">
          <li><a href="/#home">Home</a></li>

          
          <li><a href="/#about">About</a></li>
           
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </div>

      <div className="nav-icons">
        {/* Mail Icon */}
        <a href="mailto:niyatipatil828@gmail.com" title="Email Me">
          <i className="fa-regular fa-envelope"></i>
        <FaRegEnvelope/>
        </a>
        <a href="https://github.com/niyatipatil-projects30" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        </div>
       </nav>
    );
}
export default Navbar;