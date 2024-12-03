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
          I have experience in operations and data analytics at <strong>Scale AI</strong>. 
        </p>
          <p>
          I thrive at the
          intersection of creativity and analytics, continuously seeking new ways to take a deeper dive into subjects.
          While studying Journalism in college, <i>Reporting With Data</i> quickly became my favorite class. Leveraging R & SQL
          to combine my interests in data and storytelling was an experience that heavily influenced my career path.
        </p>
        <p>
          My passion for analyzing data and discovering trends has been a driving force throughout my life.
          Starting with scraping through large .HEX files when I was a kid in order to modify video games,
          this love for data has evolved into a powerful tool I use in my career, a way to express myself with fun projects, and even as a method for creating formulas for producing music.
        </p>
        
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:salemkian1@gmail.com">salemkian1@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/salemkian" target="_blank" rel="noopener noreferrer">Kian Salem</a></p>
      </div>
    </div>
  );
}

export default About;