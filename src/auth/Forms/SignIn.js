import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false); // State for admin selection
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        // Mock login validation for user and admin
        const userCredentials = { email: "user@test.com", password: "user123" };
        const adminCredentials = { email: "admin@test.com", password: "admin123" };

        let credentials = isAdmin ? adminCredentials : userCredentials;

        if (email === credentials.email && password === credentials.password) {
            login({ name: isAdmin ? "Admin User" : "Test User", email, role: isAdmin ? "admin" : "user" });
            navigate(isAdmin ? "/admin-dashboard" : "/");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-wrapper">
                <h2 className="signin-title">Sign in to your Account</h2>

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

                        {/* Admin login option */}
                        <div className="form-group">
                            <label htmlFor="isAdmin" className="form-label">
                                Sign in as Admin
                            </label>
                            <input
                                type="checkbox"
                                id="isAdmin"
                                checked={isAdmin}
                                onChange={(e) => setIsAdmin(e.target.checked)}
                                className="form-checkbox"
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="signin-button">
                                Sign In
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
