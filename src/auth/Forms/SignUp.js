import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
    const [activeTab, setActiveTab] = useState("startup");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Mock registration (Save details to local storage for simplicity)
        const userData = { 
            type: activeTab,
            name, 
            email 
        };
        
        // Store user data in local storage
        localStorage.setItem(`${activeTab}User`, JSON.stringify(userData));
        
        alert(`Sign up as ${activeTab} successful! Please sign in.`);
        navigate("/signin");
    };

    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <h2 className="signup-title">Create Your Account</h2>
                
                {/* Tabs */}
                <div className="signup-tabs">
                    <button
                        type="button"
                        onClick={() => setActiveTab("startup")}
                        className={`signup-tab ${activeTab === "startup" ? "active-startup" : ""}`}
                    >
                        Startup
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab("investor")}
                        className={`signup-tab ${activeTab === "investor" ? "active-investor" : ""}`}
                    >
                        Investor
                    </button>
                </div>

                {/* Sign Up Form */}
                <div className="signup-form-container">
                    <form onSubmit={handleSignUp} className="signup-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                {activeTab === "startup" ? "Startup Name" : "Full Name"}
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder={activeTab === "startup" ? "Enter startup name" : "Enter your full name"}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className={`signup-button ${activeTab === "startup" ? "startup-button" : "investor-button"}`}
                            >
                                Sign Up as {activeTab === "startup" ? "Startup" : "Investor"}
                            </button>
                        </div>
                    </form>
                </div>
                
                {/* Footer Link */}
                <div className="signup-footer">
                    <p className="login-text">
                        Already have an account? 
                        <a href="/signin" className="login-link"> Sign In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;