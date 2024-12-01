import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "./signin.css" ;

const SignIn = () => {
    const [activeTab, setActiveTab] = useState("startup");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        // Mock login validation with different credentials for startup and investor
        const credentials = {
            startup: { email: "startup@test.com", password: "startup123" },
            investor: { email: "investor@test.com", password: "investor123" }
        };

        const currentCredentials = credentials[activeTab];

        if (email === currentCredentials.email && password === currentCredentials.password) {
            login({ 
                name: activeTab === "startup" ? "Test Startup" : "Test Investor", 
                email,
                type: activeTab
            });
            navigate("/");
        } else {
            alert(`Invalid ${activeTab} credentials`);
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-wrapper">
                <h2 className="signin-title">Sign in to your Account</h2>
                
                {/* Tabs */}
                <div className="signin-tabs">
                    <button
                        type="button"
                        onClick={() => setActiveTab("startup")}
                        className={`signin-tab ${activeTab === "startup" ? "active-startup" : ""}`}
                    >
                        Startup
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab("investor")}
                        className={`signin-tab ${activeTab === "investor" ? "active-investor" : ""}`}
                    >
                        Investor
                    </button>
                </div>

                {/* Sign In Form */}
                <div className="signin-form-container">
                    <form onSubmit={handleSignIn} className="signin-form">
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
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className={`signin-button ${activeTab === "startup" ? "startup-button" : "investor-button"}`}
                            >
                                Sign In as {activeTab === "startup" ? "Startup" : "Investor"}
                            </button>
                        </div>
                    </form>
                </div>
                
                {/* Footer Link */}
                <div className="signin-footer">
                    <a href="/forgot-password" className="forgot-password-link">
                        Forgot your password?
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;