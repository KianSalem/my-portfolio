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
          My passion for music and data analytics has been a driving force throughout my life.
          Starting with the trumpet in 6th grade, I expanded my musical talents to guitar and piano,
          which I still play today. This love for music evolved into DJing and producing my own
          electronic music.
        </p>
        <p>
          Professionally, I have experience working at Scale AI and have developed strong data
          analytics skills through Reporting With Data classes in college. I thrive at the
          intersection of creativity and analytics, continuously seeking new ways to blend my
          interests in music and data.
        </p>
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:salemkian1@gmail.com">your-email@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/salemkian" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a></p>
      </div>
    </div>
  );
}

export default About;