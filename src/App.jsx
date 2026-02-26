import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import TeamPage from "./pages/TeamPage";
import Initiatives from "./pages/Initiatives";

export default function App() {
  return (
    <Router>
      {/* 1. Navbar stays at the top of every single page */}
      <Navbar />

      {/* 2. Routes decide which page to show in the middle */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/initiatives" element={<Initiatives />} />

        {/* Redirect any unknown path back to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* 3. Footer stays at the bottom of every single page */}
      <Footer />
    </Router>
  );
}
