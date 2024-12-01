import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
    const { user, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

    const toggleMenu = () => setMenuOpen(!menuOpen); // Function to toggle the menu

    return (
        <nav className="navbar">
            <div className="logo">
                <span className="icon">↑</span> 
                <Link to="/" className="link">
                    Startup Accelerator
                </Link>
            </div>
            <div className={`navLinks ${menuOpen ? "open" : ""}`}>
                <Link to="/" className="link">
                    Products
                </Link>
                <Link to="/investors" className="link">
                    For Investors
                </Link>
                <Link to="/founders" className="link">
                    For Founders
                </Link>
                <Link to="/resources" className="link">
                    Resources
                </Link>
                <Link to="/events" className="link">
                    Events
                </Link>
                {user ? (
                    <>
                        <span className="user">Welcome, {user.name}</span>
                        <button className="button" onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signin" className="signInButton">
                            Sign In
                        </Link>
                        <Link to="/signup" className="signUpButton">
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
            {/* Hamburger Icon for mobile view */}
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
