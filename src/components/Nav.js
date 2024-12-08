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
        {/* General Links */}
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

        {/* Dropdown Menus */}
        <div className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Schemes & Policies
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/schemes/central">
                Central Government Schemes
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/schemes/ayush">
                Ministry of Ayush Schemes
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Network
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/network/action">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/network/another">
                Another Action
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to="/network/other">
                Something Else Here
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Get Featured
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/explore">
                Explore
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/startups">
                Showcase Startup
              </Link>
            </li>
          </ul>
        </div>

        {/* Authentication & User Info */}
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

      {/* Hamburger Menu for Mobile View */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
