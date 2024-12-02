// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Kian Salem</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/edm-analysis">EDM Music Analysis</Link>
        </li>
        <li>
          <Link to="/loan-analysis">Loan Redlining Analysis</Link>
        </li>
        <li>
          <Link to="/salary-analysis">Salary Analysis</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;