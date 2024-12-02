// src/components/EDMAnalysis.js
import React, { useState } from 'react';
import '../styles/EDMAnalysis.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function EDMAnalysis() {
  const [showSQL, setShowSQL] = useState(false);

  const toggleSQL = () => {
    setShowSQL(!showSQL);
  };

  return (
    <div className="edm-analysis">
      <h1>Electronic Music Analysis</h1>

      {/* Prologue */}
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

      {/* Analysis Sections */}
      <div className="analysis-section">
        <h2>Evolution of Electronic Music</h2>

        {/* Section 1 */}
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
            {/* Embed Power BI Visualization 1 */}
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

        {/* Section 2 */}
<div className="analysis-item">
  <h3>2. The Danceability Peak: The Year of the Groove</h3>
  <p>
    Danceability is a core element of EDM, reflecting how suitable a track is for dancing based on tempo, rhythm stability, beat strength, and overall regularity. Investigating which year produced the most danceable tracks can highlight shifts in production styles and audience preferences.
  </p>
  <p>
    <strong>Finding:</strong> The year <strong>2008</strong> had the highest average danceability in EDM tracks, indicating a peak in groove-oriented production during that period.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 2 */}
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

{/* Section 3 */}
<div className="analysis-item">
  <h3>3. Amplified Loudness: Volume Over the Years</h3>
  <p>
    Loudness influences the perceived energy and intensity of music. By examining loudness trends, we can understand how production techniques and mastering practices in EDM have evolved.
  </p>
  <p>
    <strong>Finding:</strong> The average loudness of EDM tracks has <strong>remained steady</strong>, reflecting a consistent trend amongst electronic music volume levels.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 3 */}
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

{/* Section 4 */}
<div className="analysis-item">
  <h3>4. The Pinnacle of Popularity: When EDM Shined Brightest</h3>
  <p>
    Popularity metrics reveal how well tracks resonate with listeners. Identifying the year with the highest average track popularity can spotlight pivotal moments in EDM's history.
  </p>
  <p>
    <strong>Finding:</strong> <strong>2021</strong> had the highest average track popularity, suggesting a peak in mainstream acceptance and commercial success for EDM.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 4 */}
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

{/* Section 5 */}
<div className="analysis-item">
  <h3>5. Key Dominance: The Most Popular Music Key in EDM</h3>
  <p>
    The key of a track influences its mood and emotional impact. Uncovering the most common key can provide insights into the tonal preferences in EDM production.
  </p>
  <p>
    <strong>Finding:</strong> The key of <strong>C# major</strong> is the most common in EDM tracks, indicating a preference for this versatile and harmonious key.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 5 */}
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

{/* Section 6 */}
<div className="analysis-item">
  <h3>6. Tempo vs. Danceability: Does Speed Fuel the Groove?</h3>
  <p>
    Exploring the relationship between tempo and danceability can reveal whether faster tracks are indeed more suitable for dancing.
  </p>
  <p>
    <strong>Finding:</strong> The most danceable tempo range is between <strong>120 - 130 BPM</strong>, indicating that faster tempo does not always mean more danceable.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 6 */}
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

{/* Section 7 */}
<div className="analysis-item">
  <h3>7. Acoustic Moments: When EDM Went Unplugged</h3>
  <p>
    While EDM is known for its electronic sounds, acoustic elements can add depth and diversity. Identifying when acousticness peaked can show shifts towards organic sounds.
  </p>
  <p>
    <strong>Finding:</strong> The year <strong>2013</strong> had the highest average acousticness in EDM tracks, suggesting a period of experimentation with more acoustic elements.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 7 */}
    <iframe
      title="Average Acousticness of EDM Tracks by Year"
      width="800"
      height="250"
      src="https://app.powerbi.com/view?r=eyJrIjoiZDIxYzcwMDAtNDE3NS00ZWIzLTljMjQtZTgzZTc3ODczNzFkIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ"
      frameBorder="0"
      allowFullScreen={true}
    ></iframe>
  </div>
</div>

{/* Section 8 */}
<div className="analysis-item">
  <h3>8. Instrumental Evolution: The Shift Towards Vocals</h3>
  <p>
    Instrumentalness measures the absence of vocals in tracks. Analyzing its variation over the years can highlight trends in the inclusion of vocals in EDM.
  </p>
  <p>
    <strong>Finding:</strong> There has been a <strong>decrease in instrumentalness</strong> from 2007 to 2022, indicating a trend towards more vocal-heavy EDM tracks.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 8 */}
    <iframe
      title="Average Instrumentalness of EDM Tracks Over the Years"
      width="800"
      height="250"
      src="https://app.powerbi.com/view?r=eyJrIjoiZDIxYzcwMDAtNDE3NS00ZWIzLTljMjQtZTgzZTc3ODczNzFkIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ"
      frameBorder="0"
      allowFullScreen={true}
    ></iframe>
  </div>
</div>

{/* Section 9 */}
<div className="analysis-item">
  <h3>9. Extended Play: The Year of Longer Tracks</h3>
  <p>
    Track duration can affect listener engagement and the overall experience. Identifying when tracks were longest can indicate trends in production length.
  </p>
  <p>
    <strong>Finding:</strong> <strong>2010</strong> had the longest average track duration, suggesting a time when producers favored extended mixes or longer compositions.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 9 */}
    <iframe
      title="Average Track Duration by Year"
      width="800"
      height="250"
      src="https://app.powerbi.com/view?r=eyJrIjoiZDIxYzcwMDAtNDE3NS00ZWIzLTljMjQtZTgzZTc3ODczNzFkIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ"
      frameBorder="0"
      allowFullScreen={true}
    ></iframe>
  </div>
</div>

{/* Section 10 */}
<div className="analysis-item">
  <h3>10. Duration by Key: Time Signatures in Focus</h3>
  <p>
    Exploring how track duration varies by musical key can reveal if certain keys inspire longer compositions.
  </p>
  <p>
    <strong>Finding:</strong> Tracks in the key of <strong>D minor</strong> have the longest average duration, indicating a tendency for lengthier pieces in this key.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 10 */}
    <iframe
      title="Average Track Duration by Music Key"
      width="800"
      height="250"
      src="https://app.powerbi.com/view?r=eyJrIjoiZDIxYzcwMDAtNDE3NS00ZWIzLTljMjQtZTgzZTc3ODczNzFkIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ"
      frameBorder="0"
      allowFullScreen={true}
    ></iframe>
  </div>
</div>

{/* Section 11 */}
<div className="analysis-item">
  <h3>11. Energy Meets Emotion: The Dancefloor Mood</h3>
  <p>
    Energy reflects the intensity, while valence indicates the positivity of a track. Examining their relationship can reveal how energetic tracks influence emotional responses.
  </p>
  <p>
    <strong>Finding:</strong> There is a <strong>moderate positive correlation</strong> between energy and valence, suggesting that more energetic tracks tend to be perceived as more positive.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 11 */}
    <iframe
      title="Energy vs. Valence in EDM Tracks"
      width="800"
      height="250"
      src="https://app.powerbi.com/view?r=eyJrIjoiZDIxYzcwMDAtNDE3NS00ZWIzLTljMjQtZTgzZTc3ODczNzFkIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ"
      frameBorder="0"
      allowFullScreen={true}
    ></iframe>
  </div>
</div>

{/* Section 12 */}
<div className="analysis-item">
  <h3>12. Live Vibes: Liveness and Listener Appeal</h3>
  <p>
    Liveness measures the presence of a live audience or ambiance. Analyzing its effect on popularity can show if live elements enhance listener appeal.
  </p>
  <p>
    <strong>Finding:</strong> Tracks with higher liveness tend to have <strong>higher popularity</strong>, indicating that live-feel tracks resonate more with audiences.
  </p>
  <div className="visualization">
    {/* Embed Power BI Visualization 12 */}
    <iframe
      title="Liveness vs. Popularity in EDM Tracks"
      width="800"
      height="250"
      src="https://app.powerbi.com/view?r=eyJrIjoiZDIxYzcwMDAtNDE3NS00ZWIzLTljMjQtZTgzZTc3ODczNzFkIiwidCI6IjE4MWRmYWQ4LWU1YzQtNDZiNS05ZTJhLTI4MjQwMzc3M2M1YyJ"
      frameBorder="0"
      allowFullScreen={true}
    ></iframe>
  </div>
</div>


        {/* SQL Notebook Section */}
        <div className="sql-notebook">
          <h2>Technical Appendix: SQL Notebook</h2>
          <p>
            To showcase the technical process behind this analysis, I've included the SQL queries
            used to extract and analyze the data. Click the button below to view the SQL notebook.
          </p>
          <button className="sql-toggle-button" onClick={toggleSQL}>
            {showSQL ? 'Hide SQL Notebook' : 'View SQL Notebook'}
          </button>
          {showSQL && (
            <div className="sql-content">
              <SyntaxHighlighter language="sql" style={docco} customStyle={{
    backgroundColor: '#282C34', // Ensure consistent dark background
    borderRadius: '10px', // Match CSS styling
    padding: '20px', // Add padding for a cleaner look
    overflowX: 'auto', // Ensure horizontal scrolling if needed
  }}>
                {`-- Creating the database.
CREATE DATABASE edm_tracks_db;

-- RUN BEFORE OTHER QUERIES - tells database which schema to work with.
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

-- Import data from CSV to populate the table.
LOAD DATA LOCAL INFILE '/Users/kians./Documents/my-portfolio/projects/Data/Music_Analysis/edmHits.csv'
INTO TABLE tracks
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\\n'
IGNORE 1 ROWS
(Track, Artist, Album, Year, Duration, Time_Signature, Danceability, Energy, MusicKey, Loudness, Mode, Speechiness, Acousticness, Instrumentalness, Liveness, Valence, Tempo, Popularity);

-- Testing that the table was properly populated by the included data.
SELECT * FROM tracks LIMIT 5;

-- Answering questions:

-- How has the average tempo of EDM tracks changed over the years?
SELECT Year, AVG(Tempo) AS Average_Tempo
FROM tracks
GROUP BY Year
ORDER BY Year;

-- Which year produced the most danceable tracks?
SELECT Year, AVG(Danceability) AS Average_Danceability
FROM tracks
GROUP BY Year
ORDER BY Average_Danceability DESC
LIMIT 1;

-- What are the loudness trends in EDM tracks across years?
SELECT Year, AVG(Loudness) AS Average_Loudness
FROM tracks
GROUP BY Year
ORDER BY Year;

-- Which year had the highest average track popularity?
SELECT Year, AVG(Popularity) AS Average_Popularity
FROM tracks
GROUP BY Year
ORDER BY Average_Popularity DESC
LIMIT 1;

-- Which key is most common in EDM tracks?
SELECT MusicKey, COUNT(*) AS Count
FROM tracks
GROUP BY MusicKey
ORDER BY Count DESC
LIMIT 1;

-- Are faster tracks (higher tempo) more danceable?
SELECT Tempo, Danceability
FROM tracks;

-- Which year produced the most acoustic EDM tracks?
SELECT Year, AVG(Acousticness) AS Average_Acousticness
FROM tracks
GROUP BY Year
ORDER BY Average_Acousticness DESC
LIMIT 1;

-- How does instrumentalness vary across the years?
SELECT Year, AVG(Instrumentalness) AS Average_Instrumentalness
FROM tracks
GROUP BY Year
ORDER BY Year;

-- Which year had the longest average track duration?
SELECT Year, AVG(TIME_TO_SEC(Duration)) AS Average_Duration_Seconds
FROM tracks
GROUP BY Year
ORDER BY Average_Duration_Seconds DESC
LIMIT 1;

-- What is the average duration of tracks by key?
SELECT MusicKey, AVG(TIME_TO_SEC(Duration)) AS Average_Duration_Seconds
FROM tracks
GROUP BY MusicKey
ORDER BY Average_Duration_Seconds DESC;

-- What’s the relationship between energy and valence in EDM tracks?
SELECT Energy, Valence
FROM tracks;

-- How does liveness affect track popularity?
SELECT Liveness, Popularity
FROM tracks;`}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EDMAnalysis;