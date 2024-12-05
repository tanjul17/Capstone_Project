import React from "react";
import "../Home/Home.css";

export default function Home() {
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
      <div className="main text-center">
        <h1 className="header text-primary">Key Initiatives</h1>
        <p className="para text-secondary">
          Information and Resources: Providing comprehensive information and
          resources for startups, including guides, articles, videos, and tools
          to help entrepreneurs understand the startup ecosystem, legal
          requirements, funding options, and business development.
          <br />
          Registration and Compliance: Offering a streamlined process for
          startup registration and compliance with relevant government
          regulations and tax authorities. 
          <br />
          Funding and Investment: Facilitating access to funding opportunities
          and connecting startups with potential investors.
          <br />
          Networking and Collaboration: Creating a platform for startups to
          network with mentors, industry experts, and potential partners.
        </p>
      </div>

      <div className="Scheme my-5">
        <h1 className="header text-primary">Schemes & Policies</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card border-success mb-3" style={cardStyle}>
                <div className="card-header text-center">Notifications</div>
                <div className="card-body text-center">
                  <p className="card-text">
                    Stay on top of all policy and regulatory updates that are
                    important for your next startup move.
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
                  Central Government Schemes
                </div>
                <div className="card-body text-center">
                  <p className="card-text">
                    An aggregation of all startup-focused schemes and policies
                    by the Central Government of India.
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
                  <p className="card-text">
                    Know about the States’ and UTs’ startup policies for Indian
                    startups.
                  </p>
                  <a href="/" className="btn btn-primary" style={buttonStyle}>
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="StartupEcoSystem my-5">
        <h1 className="header text-primary">Startup Ecosystem</h1>
        <div className="container">
          <div className="row justify-content-between">
            <div className="card mb-4" style={cardStyle}>
              <img src="./1.png" className="card-img-top" alt="Network" />
              <div className="card-body text-center">
                <h5 className="card-title">Network</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary" href="/" role="button" style={buttonStyle}>
                  View
                </a>
              </div>
            </div>

            <div className="card mb-4" style={cardStyle}>
              <img src="./2.png" className="card-img-top" alt="Mentorship" />
              <div className="card-body text-center">
            <div className="card " style={Styles}>
              <img src="./2.png" className="card-img-top" alt="..." />
              <div className="card-body ">
                <h5 className="card-title">Mentorship</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary" href="/" role="button" style={buttonStyle}>
                  View
                </a>
              </div>
            </div>

            <div className="card mb-4" style={cardStyle}>
              <img src="./3.png" className="card-img-top" alt="Showcase" />
              <div className="card-body text-center">
                <h5 className="card-title">Showcase</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a className="btn btn-primary" href="/" role="button" style={buttonStyle}>
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-5">
       

        

        <button className="btn btn-success mx-2" style={buttonStyle}>
          Investor Portal
        </button>

        <button
  className="btn btn-info mx-2"
  style={buttonStyle}
  onClick={() => (window.location.href = "/startup-form")}
>
  Startup Portal
</button>
      </div>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Minister
          </h3>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <img src="./minister.png" alt="Minister" className="img-fluid mb-3" />
          <h2>Shri Sarbananda Sonowal</h2>
          <p>Hon'ble Cabinet Minister</p>
          <p>Email: minister-ayush@nic.in</p>
          <p>Phone: 011-24651955, 011-24651935</p>
          <p>
            Work Allocated: Ministry of Ayush & Ministry of Ports, Shipping, and
            Waterways.
          </p>
        </div>
      </div>
    </>
  );
}
