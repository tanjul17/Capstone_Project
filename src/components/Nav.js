import React from "react";
import { Link } from "react-router-dom";
import {useAuth} from "../auth/AuthContext"

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <Link to="/" style={styles.link}>
                    MyApp
                </Link>
            </div>
            <div style={styles.navLinks}>
                <Link to="/" style={styles.link}>
                    Home
                </Link>
                {user ? (
                    <>
                        <span style={styles.user}>Welcome, {user.name}</span>
                        <button style={styles.button} onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/signin" style={styles.link}>
                            Sign In
                        </Link>
                        <Link to="/signup" style={styles.link}>
                            Sign Up
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
    },
    logo: {
        fontSize: "24px",
        fontWeight: "bold",
    },
    navLinks: {
        display: "flex",
        alignItems: "center",
        gap: "15px",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        fontSize: "18px",
    },
    user: {
        fontSize: "18px",
        marginRight: "10px",
    },
    button: {
        backgroundColor: "#ff5555",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default Navbar;
