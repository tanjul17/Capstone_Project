import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const NewStartup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [startupName, setStartupName] = useState("");
    const [phone, setPhone] = useState("");
    const [industry, setIndustry] = useState("");
    const [city, setCity] = useState("");
    const [website, setWebsite] = useState("");
    const [fundingStage, setFundingStage] = useState("");
    const [teamSize, setTeamSize] = useState("");
    const [startupLogo, setStartupLogo] = useState(null); // File for startup logo
    const [proposalFile, setProposalFile] = useState(null); // File for startup proposal
    const navigate = useNavigate();

    const uploadToCloudinary = async (file, folder) => {
        if (!file) return null;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET); // Use environment variable
        formData.append('folder', folder); // Organize files into folders

        const response = await axios.post(
            process.env.REACT_APP_CLOUDINARY_URL, // Use environment variable
            formData
        );

        return response.data.secure_url; // Cloudinary URL for the uploaded file
    };

    const submitBtn = async (e) => {
        e.preventDefault();
        try {
            const logoUrl = await uploadToCloudinary(startupLogo, 'startup_logos'); // Upload logo
            const proposalUrl = await uploadToCloudinary(proposalFile, 'startup_proposals'); // Upload proposal

            const response = await axios.post(
                process.env.REACT_APP_API_URL, // Use environment variable
                {
                    name,
                    email,
                    startupName,
                    phone,
                    industry,
                    city,
                    website,
                    fundingStage,
                    teamSize,
                    logoUrl, // Cloudinary URL for logo
                    proposalUrl, // Cloudinary URL for proposal
                },
                { headers: { "Content-Type": "application/json" } }
            );

            navigate("/startups");
        } catch (error) {
            alert("Error occurred while adding your startup");
        }
    };

    return (
        <div>
            <h2 className="text-center mt-4">Fill out this form to add your startup</h2>
            <form onSubmit={submitBtn} className="shadow rounded p-5 m-5">
                {/* Founder and Contact Information */}
                <div className="row justify-content-center">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="name" className="form-label">Founder Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name} required type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3 col-md-5">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} required type="email" className="form-control" id="email" />
                    </div>
                </div>

                {/* Startup Details */}
                <div className="row justify-content-center mt-4">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="startupName" className="form-label">Startup Name</label>
                        <input onChange={(e) => setStartupName(e.target.value)} value={startupName} required type="text" className="form-control" id="startupName" />
                    </div>
                    <div className="mb-3 col-md-5">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} required type="text" className="form-control" id="phone" />
                    </div>
                </div>

                {/* Additional Information */}
                <div className="row justify-content-center mt-4">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="industry" className="form-label">Industry</label>
                        <input onChange={(e) => setIndustry(e.target.value)} value={industry} required type="text" className="form-control" id="industry" />
                    </div>
                    <div className="mb-3 col-md-5">
                        <label htmlFor="city" className="form-label">City</label>
                        <input onChange={(e) => setCity(e.target.value)} value={city} required type="text" className="form-control" id="city" />
                    </div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="mb-3 col-md-5">
                        <label htmlFor="website" className="form-label">Website URL</label>
                        <input onChange={(e) => setWebsite(e.target.value)} value={website} type="url" className="form-control" id="website" />
                    </div>
                    <div className="mb-3 col-md-5">
                        <label htmlFor="fundingStage" className="form-label">Funding Stage</label>
                        <input onChange={(e) => setFundingStage(e.target.value)} value={fundingStage} type="text" className="form-control" id="fundingStage" />
                    </div>
                </div>

                {/* File Uploads */}
                <div className="custom-file my-4" style={{ marginLeft: "8.5%" }}>
                    <input
                        onChange={(e) => setStartupLogo(e.target.files[0])}
                        type="file"
                        className="custom-file-input"
                        id="startupLogo"
                        accept="image/*"
                    />
                    <label className="custom-file-label" htmlFor="startupLogo">Choose Startup Logo</label>
                </div>
                <div className="custom-file my-4" style={{ marginLeft: "8.5%" }}>
                    <input
                        onChange={(e) => setProposalFile(e.target.files[0])}
                        type="file"
                        className="custom-file-input"
                        id="proposalFile"
                        accept="application/pdf"
                    />
                    <label className="custom-file-label" htmlFor="proposalFile">Upload Proposal (PDF)</label>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};
