import React from "react";
import "../Home/Home.css";

export default function Home() {
  const Styles = {
    width: "25rem",
  };
  return (
    <>
    <div class="hero-title"><h1>Private market investing made easy</h1>
        <h2 class="hero-subtitle">Raise fund. Start syndicate. Drive growth</h2>
        <button class="btn-investor">For Investor</button>
        <button class="btn-startup">For Startup</button>
        </div>
      <div className="main">
      
        <h1 className="header">What we do?</h1>
        <p className="para">
        We pave the way for founders, investors, and LPs to strengthen their journey in the Indian startup ecosystem.
        Enter the ecosystem with LetsVenture.
        </p>
      </div>

      <div className="Scheme">
        <h1 className="header">Scheme & Policies</h1>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-success mb-3">
                <div className="card-header text-center">Notifications</div>
                <div className="card-body text-center">
                  {/* <h5 className="card-title">$0/mo</h5> */}
                  <p className="card-text">
                    Stay on top of all policy and regulatory updates that are
                    important for your next startup move.
                  </p>
                  <div className="container">
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-primary">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-success mb-3">
                <div className="card-header text-center">
                  Central Goverment Schems
                </div>
                <div className="card-body text-center">
                  {/* <h5 className="card-title">$15/mo</h5> */}
                  <p className="card-text">
                    An aggregation of all Startup focused schemes and policies
                    by the Central Government of India.
                  </p>
                  <div className="container">
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-primary">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-success mb-3">
                <div className="card-header text-center">
                  State Goverment Schemes
                </div>
                <div className="card-body text-center">
                  {/* <h5 className="card-title">Special title treatment</h5> */}
                  <p className="card-text">
                    Know about the States’ and UTs’ startup policies for Indian
                    startups.
                  </p>
                  <div className="container">
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-primary">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="StartupEcoSystem">
        <h1 className="header">Startup Ecosystem</h1>

        <div className="container">
          <div className="row justify-content-between">
            <div className="card" style={Styles}>
              <img src="./1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Network</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>

              <div className="card-body">
                <a class="btn btn-primary" href="/" role="button">
                  View
                </a>
              </div>
            </div>

            <div className="card " style={Styles}>
              <img src="./2.png" className="card-img-top" alt="..." />
              <div className="card-body ">
                <h5 className="card-title">Mentorship</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>

              <div className="card-body">
                <a class="btn btn-primary" href="/" role="button">
                  View
                </a>
              </div>
            </div>

            <div className="card" style={Styles}>
              <img src="./3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Showcase</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="card-body">
                <a class="btn btn-primary" href="/" role="button">
                  View
                </a>
              </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
}
