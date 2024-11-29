// src/components/ProjectCard.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  /* Add your styling here */
`;

function ProjectCard({ title, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card onClick={() => setExpanded(!expanded)}>
      <h3>{title}</h3>
      <p>{description}</p>
      {expanded && (
        <div>
          {/* Expanded content goes here */}
          <p>Detailed information about the project.</p>
        </div>
      )}
    </Card>
  );
}

export default ProjectCard;