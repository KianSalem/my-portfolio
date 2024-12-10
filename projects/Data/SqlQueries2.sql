-- Creating the database.
CREATE DATABASE edm_tracks_db;

-- RUN BEFORE OTHER QUERIES - tells database which scheme to work with.
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
LINES TERMINATED BY '\n'
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
FROM tracks;