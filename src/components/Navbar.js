// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar ${isHomePage ? '' : 'other-page'}`}>
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