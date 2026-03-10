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
import ScrollToTop from "./components/ScrollToTop"; // <-- 1. Added Import

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import SignUp from "./pages/SignUp";
import TeamPage from "./pages/TeamPage";
import Initiatives from "./pages/Initiatives";
import AdvisoryComit from "./pages/AdvisoryComit";
import Programme from "./pages/Programme";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

export default function App() {
  return (
    <Router>
      {/* <-- 2. Added ScrollToTop helper right here! --> */}
      <ScrollToTop />

      {/* 1. Navbar stays at the top of every single page */}
      <Navbar />

      {/* 2. Routes decide which page to show in the middle */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Events />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/advisory" element={<AdvisoryComit />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />

        {/* Redirect any unknown path back to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* 3. Footer stays at the bottom of every single page */}
      <Footer />
    </Router>
  );
}
