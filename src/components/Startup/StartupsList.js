import React from 'react';
import { Link } from 'react-router-dom';
import './startuplist.css'; // Importing the CSS file


const startupTypes = [
  "Tech Startups",
  "Product-Based Startups",
  "Service-Based Startups",
  "E-Commerce Startups",
  "Health and Biotech Startups",
  "Fintech Startups",
  "Edtech Startups",
  "Social Impact Startups",
  "Green or Sustainability Startups",
  "Blockchain and Cryptocurrency Startups",
  "SaaS (Software as a Service) Startups",
  "AI and Machine Learning Startups",
  "Consumer Startups",
  "VR/AR Startups",
  "Travel Startups",
  "Foodtech Startups"
 
];

const StartupsList = () => {
  return (
    <div className="startups-grid-container">
      <h1 className="title">Types of Startups</h1>
      <div className="grid">
        {startupTypes.map((type, index) => (
          <Link
            to={`/startup-types/${type.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="grid-card-link"
          >
            <div className="grid-card">
              <h2 className="grid-card-title">{type}</h2>
              <p className="grid-card-description">Explore {type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StartupsList;
