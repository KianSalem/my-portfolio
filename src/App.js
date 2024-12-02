// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import EDMAnalysis from './components/EDMAnalysis';
import Footer from './components/Footer';
import LoanAnalysis from './components/LoanAnalysis';
import SalaryAnalysis from './components/SalaryAnalysis';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edm-analysis" element={<EDMAnalysis />} />
          <Route path="/loan-analysis" element={<LoanAnalysis />} />
          <Route path="/salary-analysis" element={<SalaryAnalysis />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;