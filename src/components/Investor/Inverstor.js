import React from "react";
import "./investor.css";
import {Link }from 'react-router-dom';

const Investor = () => {
  
  return (
    <>
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Invest <span className="highlight">Together</span>
        </h1>
        <ul>
          <li>✔️ Invest in startups</li>
          <li>✔️ Co-invest with marquee investors</li>
          <li>✔️ Create a diversified portfolio and grow your investments</li>
        </ul>
        <div className="hero-buttons">
        <Link to="/startupsAll">
        <button className="btn primary">Invest in startups</button>
      </Link>
          <button className="btn secondary">Start a syndicate</button>
          <button className="btn secondary">Learn</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://img.freepik.com/free-vector/worldwide-connection-blue-background-illustration_53876-63933.jpg?t=st=1733719097~exp=1733722697~hmac=ef05b06f2f3c78360418f963b7b829716ce26405afc30ed222bfbd8ade1e800c&w=740" // Replace with your globe or decorative image
          alt="Global Network"
        />
      </div>
      </div>

      <div className="stats-section">
      <h2 className="stats-heading">
        We enable investors to discover and invest in disruptive startups
      </h2>
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon">
            <img
              src="https://img.freepik.com/free-icon/user_318-275146.jpg"
              alt="Family Offices & VC"
            />
          </div>
          <p className="stat-value">500+</p>
          <p className="stat-description">
            Family offices & VC’s invested in LV portfolio
          </p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <img
              src="https://img.freepik.com/free-icon/up-arrow_318-444290.jpg"
              alt="Average IRR"
            />
          </div>
          <p className="stat-value">31%</p>
          <p className="stat-description">Average IRR</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <img
              src="https://img.freepik.com/free-icon/hand-shake_318-444290.jpg"
              alt="Deals Closed"
            />
          </div>
          <p className="stat-value">370+</p>
          <p className="stat-description">Deals closed in 2022</p>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <img
              src="https://img.freepik.com/free-icon/document_318-444290.jpg"
              alt="AIF AUM"
            />
          </div>
          <p className="stat-value">115+</p>
          <p className="stat-description">Mn AIF AUM</p>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Investor;
