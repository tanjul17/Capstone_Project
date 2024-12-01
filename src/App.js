import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Navbar from "./components/Nav"; // Import the new Navbar
import SignIn from "./auth/Forms/SignIn";
import SignUp from "./auth/Forms/SignUp";
import Home from "./components/Home/Home"
import Footer from "./components/Footer";



const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar /> {/* Use the Navbar */}
                <Routes>
                 
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    
                </Routes>
                <Footer/>
                
            </Router>
        </AuthProvider>
    );
};



export default App;
