// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

// Example in Home.js
const HomeContainer = styled.div`
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Kian Salem</h1>
      <img src="headshot.jpeg" alt="Kian Salem" />
      <p>
        Expertise in AI/ML, data analytics, and product management - combining data reporting journalism from college and experience at Scale AI.
      </p>
    </HomeContainer>
  );
}

export default Home;