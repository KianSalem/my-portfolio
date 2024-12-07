// src/components/LoanAnalysis.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoanAnalysis.css';

function LoanAnalysis() {
  return (
    <div className="loan-analysis">
      <h1>Loan Redlining Disparity Analysis</h1>
      <p>
        Coming soon - work in progress. In the meantime, check out my completed projects below.
      </p>
      <Link to="/edm-analysis">
        <button className="cta-button">Go to EDM Analysis</button>
      </Link>
    </div>
  );
}

export default LoanAnalysis;
