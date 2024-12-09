import React from "react";
import { useNavigate } from "react-router-dom";
import "./investor.css";

export default function InvestorPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Carousel Section */}
      <div id="investorCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/unlock.png" className="d-block w-100" alt="Opportunities" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Unlock Opportunities</h5>
              <p>Discover innovative startups and grow your portfolio.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/carousel1-investor.png" className="d-block w-100" alt="Impact" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Invest in Impact</h5>
              <p>Support groundbreaking ideas that redefine industries.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/carousel3.png" className="d-block w-100" alt="Growth" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Drive Exponential Growth</h5>
              <p>Empower startups to achieve their full potential.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#investorCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#investorCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Why Invest Section */}
      <div className="container text-center my-5">
        <h1 className="header text-primary">Why Invest in Startups?</h1>
        <p className="para text-secondary">
          Investing in startups is more than just financial returns; it's about shaping the future. Support disruptive ideas,
          foster innovation, and make a significant impact on the economy.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="benefits my-5">
        <h1 className="header text-primary text-center">Benefits of Investing</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="fa fa-dollar-sign fa-3x text-success mb-3"></i>
              <h5>High Returns</h5>
              <p>Earn potentially high rewards by backing the right startups.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa fa-lightbulb fa-3x text-info mb-3"></i>
              <h5>Support Innovation</h5>
              <p>Be a catalyst for groundbreaking ideas and technologies.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa fa-handshake fa-3x text-danger mb-3"></i>
              <h5>Build Networks</h5>
              <p>Collaborate with founders, mentors, and fellow investors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="text-center my-5">
        <button
          className="btn btn-success mx-3"
          onClick={() => navigate('/InvestorOpportunities')}
        >
          View Opportunities
        </button>
        <button
          className="btn btn-info mx-3"
          onClick={() => navigate('/InvestorDashboard')}
        >
          Investor Dashboard
        </button>
      </div>
    </>
  );
}
