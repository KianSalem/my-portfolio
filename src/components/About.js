// src/components/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <img src="/images/headshot.jpg" alt="Kian Salem" className="about-photo" />
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          My passion for music has been a driving force throughout my life.
          Starting with the trumpet in 6th grade, I expanded my musical talents to guitar and piano,
          which I still play today. This love for music evolved into DJing and producing my own
          electronic music.
        </p>
        <p>
          Professionally, I have experience in operations and data analytics at Scale AI. I thrive at the
          intersection of creativity and analytics, continuously seeking new ways to blend my
          interests in music, data, and language.
        </p>
        
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:salemkian1@gmail.com">salemkian1@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/salemkian" target="_blank" rel="noopener noreferrer">Kian Salem</a></p>
      </div>
    </div>
  );
}

export default About;