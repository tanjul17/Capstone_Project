import React from "react";
import "./fonders.css";

const Founders = () => {
  
  return (
    <>
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Build <span className="highlight">Together</span>
        </h1>
        <ul>
            <li>Partnering with the best founders in their startup journey at every stage.</li>
          <li>✔️ Access to smart capital</li>
          <li>✔️ Strategic guidance</li>
          <li>✔️ Community engagement</li>
        </ul>
        <div className="hero-buttons">
          <button className="btn primary">Rasie Equity</button>
          <button className="btn secondary">Raise Debt</button>
          <button className="btn secondary">Learn</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://img.freepik.com/free-vector/start-up-concept-with-rocket_23-2147781081.jpg?t=st=1733725756~exp=1733729356~hmac=c6d90dc06eb6c654b795563db6a5e3b1676e8944ab12a49c8a87b9be14ef0eef&w=740" // Replace with your globe or decorative image
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
      <div className="growth-journey-container">
      <h2>How it works</h2>
      <p>Kick start your growth journey in 4 steps</p>
      <div className="steps-container">
        <div className="step">
          <div className="step-circle">1</div>
          <p>Sign up</p>
        </div>
        <div className="step">
          <div className="step-circle">2</div>
          <p>Get your startup evaluated</p>
        </div>
        <div className="step">
          <div className="step-circle">3</div>
          <p>Connect with LV experts</p>
        </div>
        <div className="step">
          <div className="step-circle">4</div>
          <p>Plot your growth journey</p>
        </div>
      </div>

      <div className="advice-section">
        <p className="advice-text">
          A good piece of advice can make or break a journey. <br />
          Discover mentors right for you.
        </p>
      </div>
    </div>
    </div>
    
    </>
  );
};

export default Founders;
