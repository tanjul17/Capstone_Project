import React from "react";
import "../Home/Home.css";
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const cardStyle = {
    width: "25rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    borderRadius: "10px",
  };

  const buttonStyle = {
    margin: "10px",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    color: "#fff",
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-title text-center">
        <h1>Private market investing made easy</h1>
        <h2 className="hero-subtitle">
          Raise fund. Start syndicate. Drive growth
        </h2>
        <button className="btn btn-success mx-2" onClick={() => navigate('/InvestorPage')} >For Investor</button>
        <button className="btn btn-info mx-2" onClick={() => navigate('/startupPage')}
        >For Startup</button>
      </div>

      {/* What We Do Section */}
      <div className="main text-center my-5">
        <h1 className="header text-primary">Key Initiatives</h1>
        <p className="para text-secondary">
          Providing comprehensive resources for startups, including guides,
          articles, videos, and tools. Streamlined processes for registration,
          compliance, and funding access.
        </p>
      </div>

      {/* Schemes Section */}
      <div className="Scheme my-5">
        <h1 className="header text-primary">Schemes & Policies</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-success mb-3" style={cardStyle}>
                <div className="card-header text-center">Notifications</div>
                <div className="card-body text-center">
                  <p>Stay on top of all policy and regulatory updates.</p>
                  <a href="/" className="btn btn-primary" style={buttonStyle}>
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-success mb-3" style={cardStyle}>
                <div className="card-header text-center">
                  Central Government Schemes
                </div>
                <div className="card-body text-center">
                  <p>
                    Startup-focused schemes and policies by the Central
                    Government.
                  </p>
                  <a href="/" className="btn btn-primary" style={buttonStyle}>
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-success mb-3" style={cardStyle}>
                <div className="card-header text-center">
                  State Government Schemes
                </div>
                <div className="card-body text-center">
                  <p>Startup policies from States and UTs.</p>
                  <a href="/" className="btn btn-primary" style={buttonStyle}>
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Startup Ecosystem Section */}
      <div className="StartupEcoSystem my-5">
        <h1 className="header text-primary text-center">Startup Ecosystem</h1>
        <div className="container">
          <div className="row justify-content-around">
            {/* Card 1 */}
            <div className="card mb-4" style={cardStyle}>
              <img src="./1.png" className="card-img-top" alt="Network" />
              <div className="card-body text-center">
                <h5 className="card-title">Network</h5>
                <p>Build strong connections within the startup ecosystem.</p>
                <a href="/" className="btn btn-primary" style={buttonStyle}>
                  View
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card mb-4" style={cardStyle}>
              <img src="./2.png" className="card-img-top" alt="Mentorship" />
              <div className="card-body text-center">
                <h5 className="card-title">Mentorship</h5>
                <p>Get guided by industry experts to scale your startup.</p>
                <a href="/" className="btn btn-primary" style={buttonStyle}>
                  View
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card mb-4" style={cardStyle}>
              <img src="./3.png" className="card-img-top" alt="Showcase" />
              <div className="card-body text-center">
                <h5 className="card-title">Showcase</h5>
                <p>
                  Showcase your startup to a network of potential investors.
                </p>
                <a href="/" className="btn btn-primary" style={buttonStyle}>
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="text-center my-5">
      <button className="btn btn-success mx-2" onClick={() => navigate('/InvestorDashboard')} >Investor-Portal</button>
        <button
          className="btn btn-info mx-2"
          style={buttonStyle}
          onClick={() => (window.location.href = "/startup-form")}
        >
          Startup Portal
        </button>
      </div>
    </>
  );
}
