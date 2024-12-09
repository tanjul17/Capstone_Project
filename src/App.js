import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import Navbar from "./components/Nav"; // Navbar Component
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import SignIn from "./auth/Forms/SignIn";
import SignUp from "./auth/Forms/SignUp";
import StartupsList from "./components/Startup/StartupsList";

// New Components (from Harsh-feature/dashboard-startup/investor)
import Startup from "./components/Startup/Startup";
import NewStartup from "./components/Startup/NewStartup";
import ContactForm from "./components/Message/ContactForm";
import Resources from "./components/Resources/Resources";
import Investor from "./components/Investor/Inverstor";
import Founders from "./components/Startup/ForFunders/Founders";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Consistent Navbar for the entire app */}
        <Routes>
          {/* General Routes */}
          <Route
            path="/"
            element={
              <div>
                <Home /> {/* Existing Home Component */}
              </div>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Startup & Resource Management Routes */}
          <Route path="/startups" element={<Startup />} />
          <Route path="/AddNewStartup" element={<NewStartup />} />
          <Route path="/message" element={<ContactForm />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/investor" element={<Investor/>}/>
          <Route path="/startupsAll" element={<StartupsList/>}/>
          <Route path="/forfounders" element={<Founders/>}/>

          {/* Duplicate path "/startup-form" for clarity */}
          {/* <Route path="/startup-form" element={<NewStartup />} /> */}
        </Routes>
        <Footer /> {/* Consistent Footer for the entire app */}
      </Router>
    </AuthProvider>
  );
};

export default App;
