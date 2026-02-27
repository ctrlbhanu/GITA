import React from "react";
import PageHeader from "../components/PageHeader";
import Advisory from "../components/Advisory"; // Importing the inner component
import BackToTop from "../components/BackToTop";
import "../css/Advisory.css"; // Importing your CSS file

export default function AdvisoryComit() {
  return (
    <>
      {/* Visual header matching your site's theme */}
      <PageHeader
        title="Advisory Committee"
        path="/advisory"
        name="Advisory Committee"
      />

      {/* Content wrapper */}
      <div className="advisory-page-content">
        <Advisory />
      </div>

      <BackToTop />
    </>
  );
}
