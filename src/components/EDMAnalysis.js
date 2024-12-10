// src/components/EDMAnalysis.js
import React, { useState, useEffect } from 'react';
import '../styles/EDMAnalysis.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'particlesjs';

function EDMAnalysis() {
  const [showSQL, setShowSQL] = useState(false);

  useEffect(() => {
    const canvas = document.querySelector('.background');
    let particlesInstance = null;
    if (canvas && window.Particles) {
      particlesInstance = window.Particles.init({
        selector: '.background',
        maxParticles: 250,
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

  const toggleSQL = () => {
    setShowSQL(!showSQL);
  };

  return (
    <div className="edm-analysis-page">
      <canvas className="background"></canvas>
      <div className="edm-analysis-content">
        <h1>Electronic Music Trends Analysis</h1>
        <p></p>
        <h4>Using SQL, Power BI, Python, and API calls</h4>

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
            Using a <strong>Python</strong> script, I called Spotify’s <strong>API</strong> to collect data on nearly 1,000 electronic
            music hits from 2007 to 2022, exporting them into a <strong>CSV</strong> file. After importing the data
            into my <strong>AWS SQL Server</strong> and cleaning it, I formulated several questions to analyze trends
            and patterns. Leveraging <strong>Power BI</strong>, I created visualizations to tell the story of EDM's
            evolution.
          </p>
        </div>

        <div className="analysis-section">
          <h2>Evolution of Electronic Music</h2>

          <div className="analysis-item">
            <h3>1. Rising Tempo: The Beat Speeds Up</h3>
            <p>
              One of the first aspects I explored was how the average tempo of EDM tracks has changed
              over the years. A higher tempo often correlates with increased energy and excitement in
              music.
            </p>
            <p>
              <strong>Finding:</strong> The average tempo of EDM tracks has gradually, but not linearly, <strong>decreased</strong> from
              2007 to 2022, indicating a trend toward more relaxed and slow-paced music.
            </p>
            <div className="visualization">
              <iframe
                title="Average Tempo Over Years"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiMjljOGU0NjUtMjVmZi00YmM2LWJkMjUtMWQ4NjNkNDg1MDM5IiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>2. The Danceability Peak: The Year of the Groove</h3>
            <p>
              Danceability is a core element of EDM. Investigating which year produced the most danceable tracks can highlight shifts in production styles.
            </p>
            <p>
              <strong>Finding:</strong> The year <strong>2008</strong> had the highest average danceability in EDM tracks.
            </p>
            <div className="visualization">
              <iframe
                title="Average Danceability of EDM Tracks by Year"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiZjg5MTU3OTctYmQ1OC00OGUxLTlkNDctNDE0ZDk0YjI0MmI1IiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>3. Amplified Loudness: Volume Over the Years</h3>
            <p>
              Loudness influences the perceived energy and intensity of music. By examining loudness trends, we can understand evolving production techniques.
            </p>
            <p>
              <strong>Finding:</strong> The average loudness of EDM tracks has <strong>remained steady</strong>.
            </p>
            <div className="visualization">
              <iframe
                title="Average Loudness of EDM Tracks Over the Years"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiOWMwOWM5MWItMWY5MS00OGE5LTlmODMtYzVhZWRlZDk2MmVjIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>4. The Pinnacle of Popularity: When EDM Shined Brightest</h3>
            <p>
              Popularity metrics reveal how well tracks resonate with listeners. Identifying peak popularity highlights pivotal moments.
            </p>
            <p>
              <strong>Finding:</strong> <strong>2021</strong> had the highest average track popularity.
            </p>
            <div className="visualization">
              <iframe
                title="Average Popularity of EDM Tracks by Year"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiZDg0NTM1NjYtM2FiMi00NjE2LWE4YTAtOWU3NzRlNjUxNDE4IiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>5. Key Dominance: The Most Popular Music Key in EDM</h3>
            <p>
              The key of a track influences its mood and tone. Finding the most common key can provide insight into producers' tonal preferences.
            </p>
            <p>
              <strong>Finding:</strong> The key of <strong>C# major</strong> is the most common in EDM tracks.
            </p>
            <div className="visualization">
              <iframe
                title="Distribution of Music Keys in EDM Tracks"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiODBjMDAzNjYtNDRmMi00ZGQ0LTg4YTUtOTcxZWI2YmJlZmI3IiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>6. Tempo vs. Danceability: Does Speed Fuel the Groove?</h3>
            <p>
              Exploring the relationship between tempo and danceability can reveal if faster beats equate to better dancing.
            </p>
            <p>
              <strong>Finding:</strong> The most danceable tempo range is between <strong>120 - 130 BPM</strong>.
            </p>
            <div className="visualization">
              <iframe
                title="Relationship Between Tempo and Danceability in EDM Tracks"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiZDIxYzcwMDAtNDE3NS00ZWIzLTljMjQtZTgzZTc3ODczNzFkIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>7. Acoustic Moments: When EDM Went Unplugged</h3>
            <p>
              Acousticness adds organic warmth to EDM tracks. Identifying when it peaked shows a trend towards incorporating acoustic elements.
            </p>
            <p>
              <strong>Finding:</strong> The year <strong>2020</strong> had the highest average acousticness.
            </p>
            <div className="visualization">
              <iframe
                title="Average Acousticness of EDM Tracks by Year"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiZDE2M2Q1OTMtZmY4ZS00ZDNmLWJiMTYtNGE4YWYxYzBiZDhlIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>8. Instrumental Evolution: The Shift Towards Vocals</h3>
            <p>
              Instrumentalness measures the absence of vocals. A decrease over time suggests more vocal-heavy EDM tracks.
            </p>
            <p>
              <strong>Finding:</strong> There has been an overall <strong>decrease in instrumentalness</strong> from 2007 to 2022.
            </p>
            <div className="visualization">
              <iframe
                title="Average Instrumentalness of EDM Tracks Over the Years"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiNmY5MWRmZmMtZTI2NS00YmQ4LTg0ZjEtMzMyNGI0OTU4YjNhIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>9. Extended Play: The Year of Longer Tracks</h3>
            <p>
              Track duration affects engagement. Identifying when tracks were longest indicates trends in production length.
            </p>
            <p>
              <strong>Finding:</strong> <strong>2010</strong> had the longest average track duration.
            </p>
            <div className="visualization">
              <iframe
                title="Average Track Duration by Year"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiMmNiMGNiNGUtYmMwNC00MWRhLThjMzEtMGQxMTRjZjE2ZTY0IiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>10. Energy Meets Emotion: The Dancefloor Mood</h3>
            <p>
              Energy and valence together reveal how intensity influences positivity in EDM tracks.
            </p>
            <p>
              <strong>Finding:</strong> There is a <strong>moderate positive correlation</strong> between energy and valence.
            </p>
            <div className="visualization">
              <iframe
                title="Energy vs. Valence in EDM Tracks"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiNzA4YWQ3ZmEtNGZiYS00ZmYwLTg2ZDItZWUyNGUwYmY0NWFlIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>

          <div className="analysis-item">
            <h3>11. Live Vibes: Liveness and Listener Appeal</h3>
            <p>
              Liveness measures the presence of a live audience. Analyzing its impact on popularity reveals if live elements resonate with audiences.
            </p>
            <p>
              <strong>Finding:</strong> Tracks with higher liveness tend to have <strong>lower popularity</strong>.
            </p>
            <div className="visualization">
              <iframe
                title="Liveness vs. Popularity in EDM Tracks"
                width="800"
                height="250"
                src="https://app.powerbi.com/view?r=eyJrIjoiOWRlYjJkZGUtYmNhYy00NTk4LTkxYWYtZTljODA3ODkzYTFiIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ9"
                frameBorder="0"
                allowFullScreen={true}
              ></iframe>
            </div>

            <div className="prologue">
              <h2>Key Takeways</h2>
              <p>
                This analysis shows tempo relaxation over time, danceability peaks, stable loudness, and a preference for C♯ major and vocal-heavy tracks.
                Popularity peaked in 2021, and acoustic experimentation in 2020 reveals ongoing innovation.
              </p>
              <p>
                These insights help us understand EDM’s evolving landscape, guiding producers toward elements that truly resonate with audiences.
              </p>
            </div>
          </div>
        </div>

        <div className="sql-notebook">
          <h2>Technical Appendix: SQL Notebook</h2>
          <p>
            Below are the SQL queries used to extract and analyze the data.
          </p>
          <button className="sql-toggle-button" onClick={toggleSQL}>
            {showSQL ? 'Hide SQL Notebook' : 'View SQL Notebook'}
          </button>
          {showSQL && (
            <div className="sql-content">
              <SyntaxHighlighter language="sql" style={docco} customStyle={{
                backgroundColor: '#282C34',
                borderRadius: '10px',
                padding: '20px',
                overflowX: 'auto'
              }}>
{`-- Creating the database.
CREATE DATABASE edm_tracks_db;

USE edm_tracks_db;

-- Creating the table.
CREATE TABLE tracks (
  Track VARCHAR(255),
  Artist VARCHAR(255),
  Album VARCHAR(255),
  Year INT,
  Duration TIME,
  Time_Signature INT,
  Danceability FLOAT,
  Energy FLOAT,
  MusicKey VARCHAR(10),
  Loudness FLOAT,
  Mode INT,
  Speechiness FLOAT,
  Acousticness FLOAT,
  Instrumentalness FLOAT,
  Liveness FLOAT,
  Valence FLOAT,
  Tempo FLOAT,
  Popularity INT
);

-- Import data from CSV.
LOAD DATA LOCAL INFILE '/Users/kians./Documents/my-portfolio/projects/Data/Music_Analysis/edmHits.csv'
INTO TABLE tracks
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\\n'
IGNORE 1 ROWS
(Track, Artist, Album, Year, Duration, Time_Signature, Danceability, Energy, MusicKey, Loudness, Mode, Speechiness, Acousticness, Instrumentalness, Liveness, Valence, Tempo, Popularity);

-- Check data
SELECT * FROM tracks LIMIT 5;

-- Average Tempo by Year
SELECT Year, AVG(Tempo) AS Average_Tempo
FROM tracks
GROUP BY Year
ORDER BY Year;

-- Most Danceable Year
SELECT Year, AVG(Danceability) AS Average_Danceability
FROM tracks
GROUP BY Year
ORDER BY Average_Danceability DESC
LIMIT 1;

-- Loudness Trends
SELECT Year, AVG(Loudness) AS Average_Loudness
FROM tracks
GROUP BY Year
ORDER BY Year;

-- Highest Popularity Year
SELECT Year, AVG(Popularity) AS Average_Popularity
FROM tracks
GROUP BY Year
ORDER BY Average_Popularity DESC
LIMIT 1;

-- Most Common Key
SELECT MusicKey, COUNT(*) AS Count
FROM tracks
GROUP BY MusicKey
ORDER BY Count DESC
LIMIT 1;

-- Tempo vs Danceability
SELECT Tempo, Danceability FROM tracks;

-- Most Acoustic Year
SELECT Year, AVG(Acousticness) AS Average_Acousticness
FROM tracks
GROUP BY Year
ORDER BY Average_Acousticness DESC
LIMIT 1;

-- Instrumentalness Over Time
SELECT Year, AVG(Instrumentalness) AS Average_Instrumentalness
FROM tracks
GROUP BY Year
ORDER BY Year;

-- Longest Tracks
SELECT Year, AVG(TIME_TO_SEC(Duration)) AS Average_Duration_Seconds
FROM tracks
GROUP BY Year
ORDER BY Average_Duration_Seconds DESC
LIMIT 1;

-- Duration by Key
SELECT MusicKey, AVG(TIME_TO_SEC(Duration)) AS Average_Duration_Seconds
FROM tracks
GROUP BY MusicKey
ORDER BY Average_Duration_Seconds DESC;

-- Energy vs Valence
SELECT Energy, Valence FROM tracks;

-- Liveness vs Popularity
SELECT Liveness, Popularity FROM tracks;`}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EDMAnalysis;