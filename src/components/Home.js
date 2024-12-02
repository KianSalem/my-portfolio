// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome! I'm Kian</h1>
        <p>Discover my passion for music and data analytics</p>
        <div className="home-buttons">
          <Link to="/about" className="btn">About Me</Link>
          <Link to="/edm-analysis" className="btn">EDM Music Analysis</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;