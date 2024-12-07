// src/components/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <p></p>
        <img src="/images/headshot.jpg" alt="Kian Salem" className="about-photo" />
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I graduated from <strong>UT Austin</strong> and have experience in operations and data analytics at <strong>Scale AI</strong>.
          </p>
          <p>
            I thrive at the intersection of creativity and analytics, continuously seeking new ways to delve deeper into subjects.
            While studying Journalism in college, <i>Reporting With Data</i> quickly became my favorite class. Leveraging R & SQL
            to combine data analysis with storytelling heavily influenced my career path.
          </p>
          <p>
            From exploring .HEX files as a kid to find patterns in data, to using analytics as a means of expression and even influencing my music production, 
            I’ve always found inspiration in discovering trends and insights through data.
          </p>

          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:salemkian1@gmail.com">salemkian1@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/salemkian" target="_blank" rel="noopener noreferrer">Kian Salem</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;
