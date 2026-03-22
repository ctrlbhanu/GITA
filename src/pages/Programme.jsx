import React from "react";
import PageHeader from "../components/PageHeader";
import InternshipForm from "../components/InternshipForm";
import Guidance from "../components/Guidance";
import ChapterLeadership from "../components/ChapterLeadership";

export default function Programme() {
  return (
    <div className="programme-page">
      {/* 1. The Banner Header */}
      <PageHeader
        title="Join Our Programme"
        path="/programme"
        name="Programme"
      />

      {/* 2. Main Content Wrapper */}
      <div
        className="programme-wrapper py-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Section 1: The Guidance Programme (Green/Left Aligned) */}
        <Guidance />

        {/* Section 3: The Application Form */}
        <InternshipForm />

        {/* Section 2: Chapter Leadership (Blue/Accent Line Aligned) */}
        <ChapterLeadership />
      </div>
    </div>
  );
}
