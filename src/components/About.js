// src/components/About.js
import React, { useEffect } from 'react';
import '../styles/About.css';
import 'particlesjs';

function About() {
  useEffect(() => {
    const canvas = document.querySelector('.background');
    let particlesInstance = null;
    if (canvas && window.Particles) {
      particlesInstance = window.Particles.init({
        selector: '.background',
        maxParticles: 45,
        speed: 0.4,
        color: '#118dff',
        connectParticles: true,
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 80,
            }
          },
          {
            breakpoint: 425,
            options: {
              maxParticles: 50
            }
          },
          {
            breakpoint: 320,
            options: {
              maxParticles: 30
            }
          }
        ]
      });
    }
    return () => {
      //If the instance supports pausing or other cleanup, call it here.
      //For example:
      if (particlesInstance && particlesInstance.pauseAnimation) {
        particlesInstance.pauseAnimation();
      }
    };
  }, []);

  return (
    <div className="about-page">
      <canvas className="background"></canvas>
      <div className="about-container">
        <p></p>
        <img src="/images/headshot.jpg" alt="Kian Salem" className="about-photo" />
        <div className="about-content">
          <h2>About Me</h2>
          <p>
          I am a graduate of <strong>The University of Texas at Austin</strong> with a 
          <strong> Bachelor of Journalism</strong> and a minor in <strong>Business</strong>, complemented 
          by a postgraduate certificate in <strong>Cybersecurity</strong>. My professional experience 
          spans operations, data analytics, and project management, most recently as a 
          <strong> Queue/Analytics Manager</strong> at <strong>Scale AI</strong>, where I led data-driven 
          initiatives and managed high-performing teams. I have strong technical skills in <strong>SQL</strong>, 
          <strong> Power BI</strong>, <strong>Python</strong>, <strong>R</strong>, <strong>React</strong>, and <strong>AWS</strong>, which I’ve used to 
          enhance efficiency and deliver impactful solutions. My goal is to continue building innovative tools 
          and strategies that drive meaningful results.
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
