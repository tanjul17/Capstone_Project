import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        // Mock registration (Save details to local storage for simplicity)
        const userData = { 
            name, 
            email 
        };

        // Store user data in local storage
        localStorage.setItem("user", JSON.stringify(userData));

        alert("Sign up successful! Please sign in.");
        navigate("/signin");
    };

    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <h2 className="signup-title">Create Your Account</h2>

                {/* Sign Up Form */}
                <div className="signup-form-container">
                    <form onSubmit={handleSignUp} className="signup-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
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
                                className="signup-button"
                            >
                                Sign Up
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
