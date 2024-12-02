// src/components/EDMAnalysis.js
import React from 'react';
import '../styles/EDMAnalysis.css';

function EDMAnalysis() {
  return (
    <div className="edm-analysis">
      <h1>Electronic Music Analysis</h1>
      <div className="prologue">
        <h2>Prologue</h2>
        <p>
          My journey into electronic music began with the trumpet in 6th grade. Over the years, I
          learned to play guitar and piano, fueling a deep passion for music that led me to DJing
          and producing my own tracks. Combining this passion with my expertise in data analytics,
          I embarked on a project to explore how different elements of electronic music have evolved
          over the years.
        </p>
        <p>
          Using a Python script, I called Spotify’s API to collect data on nearly 1,000 electronic
          music hits from 2007 to 2022, exporting them into a CSV file. After importing the data
          into my AWS SQL server and cleaning it, I formulated several questions to analyze trends
          and patterns. Leveraging Power BI, I created visualizations to tell the story of EDM's
          evolution.
        </p>
      </div>

      <div className="analysis-section">
        <h2>Analysis</h2>

        {/* Example Section */}
        <div className="analysis-item">
          <h3>How has the average tempo of EDM tracks changed over the years?</h3>
          <p>
            [Insert narrative discussing findings about tempo changes over the years.]
          </p>
          <div className="visualization">
            {/* Placeholder for Power BI Visualization */}
            <p>
                <div className="visualization">
                    <iframe
                        title="Average Tempo Over Years"
                        width="800"
                        height="250"
                        src="https://app.powerbi.com/view?r=eyJrIjoiYTZkY2IxNTUtODdmNi00ODlmLWIxYjUtYzllM2IyMTg2MGY3IiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                        frameBorder="0"
                        allowFullScreen="true"
                    ></iframe>
                    </div>
                </p>
          </div>
        </div>
        {/* Repeat for each question */}
        
       {/* <!--
        Copy the block above for each question, replacing the heading, narrative, and indicating where to embed the visualization.
        --> */}

       {/* <!-- Example for the second question -->*/}
        <div className="analysis-item">
          <h3>Which year produced the most danceable tracks?</h3>
          <p>
            [Insert narrative discussing which years had the most danceable tracks and possible reasons.]
          </p>
          <div className="visualization">
            {/* Placeholder for Power BI Visualization */}
            <p>[Embed Power BI Visualization 2 here]</p>
          </div>
        </div>

        {/* <!-- Continue with the rest of the questions --> */}

      </div>
    </div>
  );
}

export default EDMAnalysis;