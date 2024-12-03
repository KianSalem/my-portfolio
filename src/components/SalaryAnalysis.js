// SalaryAnalysis.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SalaryAnalysis.css';

function SalaryAnalysis() {
  return (
    <div className="salary-analysis">
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