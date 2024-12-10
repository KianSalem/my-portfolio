// src/components/SalaryAnalysis.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SalaryAnalysis.css';
import 'particlesjs';

function SalaryAnalysis() {

  useEffect(() => {
    let particlesInstance = null;
    const canvas = document.querySelector('.background');
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
      // If the instance supports pausing or other cleanup, call it here.
      // For example:
      if (particlesInstance && particlesInstance.pauseAnimation) {
        particlesInstance.pauseAnimation();
      }
    };
  }, []);
  
  return (
    <div className="salary-analysis">
      <canvas className="background"></canvas>
      <h1>Salary Analysis - Data Automation Vs. Analysis Careers</h1>
      <p>
        Coming soon - work in progress. In the meantime, check out my completed projects below.
      </p>
      <Link to="/edm-analysis">
        <button className="cta-button">Go to EDM Analysis</button>
      </Link>
    </div>
  );
}

export default SalaryAnalysis;