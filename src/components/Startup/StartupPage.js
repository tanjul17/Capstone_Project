import React from "react";
import { useNavigate } from "react-router-dom";
import "./startup.css";

export default function StartupPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Carousel Section */}
      <div id="startupCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/carousel1.jpg" className="d-block w-100" alt="Innovation" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Innovate and Lead</h5>
              <p>Start your journey to change the world with your ideas.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/carousel2.png" className="d-block w-100" alt="Teamwork" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Build Your Dream Team</h5>
              <p>Work with like-minded individuals who share your vision.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/carousel3.png" className="d-block w-100" alt="Growth" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Achieve Exponential Growth</h5>
              <p>Turn your startup into a global success story.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#startupCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#startupCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Why Startups Section */}
      <div className="container text-center my-5">
        <h1 className="header text-primary">Why Startups?</h1>
        <p className="para text-secondary">
          Startups are the backbone of innovation. They create jobs, solve real-world problems, and redefine industries.
          As an entrepreneur, you have the power to turn ideas into impactful solutions.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="benefits my-5">
        <h1 className="header text-primary text-center">Benefits of Starting Up</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="fa fa-lightbulb fa-3x text-success mb-3"></i>
              <h5>Innovation</h5>
              <p>Bring fresh ideas to life and create something new for the world.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa fa-users fa-3x text-info mb-3"></i>
              <h5>Networking</h5>
              <p>Build connections with industry leaders, investors, and peers.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fa fa-chart-line fa-3x text-danger mb-3"></i>
              <h5>Growth</h5>
              <p>Experience unmatched personal and professional growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="text-center my-5">
        <button
          className="btn btn-success mx-3"
          onClick={() => navigate('/AddNewStartup')}
        >
          Start a Startup
        </button>
        <button
          className="btn btn-info mx-3"
          onClick={() => navigate('/founder')}
        >
          Founder Portal
        </button>
      </div>
    </>
  );
}
