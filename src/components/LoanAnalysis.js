// src/components/LoanAnalysis.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoanAnalysis.css';
import 'particlesjs';

function LoanAnalysis() {

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
    <div className="loan-analysis">
      <canvas className="background"></canvas>
      <h1>Loan Redlining Disparity Analysis</h1>
      <p>
        Coming soon - work in progress. In the meantime, check out my completed projects below.
      </p>
      <Link to="/edm-analysis">
        <button className="cta-button">Go to EDM Analysis</button>
      </Link>
      <canvas className="background"></canvas>
    </div>
  );
}



export default LoanAnalysis;
