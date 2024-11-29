// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ProjectCard
        title="Customer Segmentation Analysis"
        description="Analyzing retail customer data to identify segments."
      />
      <ProjectCard
        title="Financial Fraud Detection"
        description="Analyzing transactions to detect fraudulent activities."
      />
      <ProjectCard
        title="E-commerce Sales Forecasting"
        description="Predicting future sales trends."
      />
    </div>
  );
}

export default Projects;