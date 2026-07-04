import React from 'react';
import './Contact.css'; // Importing the external CSS

export function Contact(){
  return (
    <section id="contact" className="contact-container">
      {/* Section Heading */}
      <h2 className="contact-heading">
        <span className="heading-accent">/</span> contact me
        <span className="heading-line"></span>
      </h2>

      {/* Contact Card Content */}
      <div className="contact-content">
        <h3 className="contact-name">Niyati Patil</h3>
        
        <p className="contact-detail">
          <strong>Phone:</strong> +91 7559314558 {/* Replace with your number */}
        </p>
        <p className="contact-detail">
          <strong>Location: </strong> Maharastra,India {/* Replace with your number */}
        </p>
        
        
        <p className="contact-detail">
          <strong>Instagram:</strong> <a href="https://instagram.com/_niyatipatil30" target="_blank" rel="noopener noreferrer">_niyatipatil30</a> {/* Replace with your link */}
        </p>

        {/* Centered Sign-off */}
        <div className="contact-signoff">
          <p>BYE!!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;