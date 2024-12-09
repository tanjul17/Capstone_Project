import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewStartup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [startupName, setStartupName] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("");
  const [city, setCity] = useState("");
  const [website, setWebsite] = useState("");
  const [fundingStage, setFundingStage] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [startupLogo, setStartupLogo] = useState(null);
  const [proposalFile, setProposalFile] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Utility function to validate email
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Utility function to upload files to Cloudinary
  const uploadToCloudinary = async (file, folder) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("folder", folder);

    try {
      const response = await axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      alert("Failed to upload file. Please try again.");
      return null;
    }
  };

  // Submit button handler
  const submitBtn = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const logoUrl = await uploadToCloudinary(startupLogo, "startup_logos");
      const proposalUrl = await uploadToCloudinary(
        proposalFile,
        "startup_proposals"
      );

      await axios.post(process.env.REACT_APP_API_URL, {
        name,
        email,
        startupName,
        phone,
        industry,
        city,
        website,
        fundingStage,
        teamSize,
        logoUrl,
        proposalUrl,
      });

      navigate("/startups");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while adding your startup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" >
        Welcome to Our Startup Accelerator!
      </h2>
      
      <div className="text-center mb-4">
        <img src="https://static.investindia.gov.in/s3fs-public/2024-03/The%20Role%20of%20Government%20Initiatives%20in%20Boosting%20Startups.jpg" alt="Startup" className="img-fluid mb-3" style={{ maxWidth: '60%' }} />
        <h2 className="text-center mt-4" >Fill out this form to join us.</h2>
        <p>Upload your startup details below</p>
      </div>

      <form onSubmit={submitBtn} className="shadow rounded p-4">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">Founder Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              type="email"
              className="form-control"
              id="email"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <label htmlFor="startupName" className="form-label">Startup Name</label>
            <input
              onChange={(e) => setStartupName(e.target.value)}
              value={startupName}
              required
              type="text"
              className="form-control"
              id="startupName"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
              type="text"
              className="form-control"
              id="phone"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <label htmlFor="industry" className="form-label">Industry</label>
            <input
              onChange={(e) => setIndustry(e.target.value)}
              value={industry}
              required
              type="text"
              className="form-control"
              id="industry"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
              type="text"
              className="form-control"
              id="city"
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <label htmlFor="website" className="form-label">Website URL</label>
            <input
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
              type="url"
              className="form-control"
              id="website"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="fundingStage" className="form-label">Funding Stage</label>
            <input
              onChange={(e) => setFundingStage(e.target.value)}
              value={fundingStage}
              type="text"
              className="form-control"
              id="fundingStage"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="startupLogo" className="form-label">Choose Startup Logo</label>
          <input
            onChange={(e) => setStartupLogo(e.target.files[0])}
            type="file"
            className="form-control"
            id="startupLogo"
            accept="image/*"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="proposalFile" className="form-label">Upload Proposal (PDF)</label>
          <input
            onChange={(e) => setProposalFile(e.target.files[0])}
            type="file"
            className="form-control"
            id="proposalFile"
            accept="application/pdf"
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ fontSize: '16px', padding: '10px 20px' }}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewStartup;
