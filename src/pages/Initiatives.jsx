import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader"; // Import the PageHeader
import Initiatives from "../components/Initiatives"; // The carousel component

export default function InitiativesPage() {
  return (
    <>
      {/* Pass the same props structure as your Team page */}
      <PageHeader
        title="Our Initiatives"
        path="/initiatives"
        name="Initiatives"
      />
      <div className="initiatives-content-wrapper">
        <Initiatives />
      </div>
    </>
  );
}
