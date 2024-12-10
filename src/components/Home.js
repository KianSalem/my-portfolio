// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BackgroundVideo.css';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <video
        autoPlay
        loop
        muted
        className="background-video"
        aria-hidden="true" // Enhances accessibility by hiding the video from screen readers
      >
        <source src="/images/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-content">
        <h1>Welcome! I'm Kian :)</h1>
        <p>Discover new topics through my data analytics projects</p>
        <div className="home-buttons">
          <Link to="/edm-analysis" className="btn">EDM Music Analysis</Link>
          <Link to="/loan-analysis" className="btn">Loan Redlining Analysis</Link>
          <Link to="/salary-analysis" className="btn">Salary Analysis</Link>
          {/* <p> </p>
          <p>My story</p>
          <Link to="/about" className="btn">About Me</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Home;