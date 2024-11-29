// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  /* Add your styling here */
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Kian Salem</h1>
      <img src="headshot.jpg" alt="Kian Salem" />
      <p>
        Expertise in AI/ML, data analytics, and product management - combining data reporting journalism from college and experience at Scale AI.
      </p>
    </HomeContainer>
  );
}

export default Home;