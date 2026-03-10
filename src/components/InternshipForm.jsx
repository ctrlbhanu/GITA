import React, { useState } from "react";
import "../css/internship.css";

export default function InternshipForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container-fluid internship-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11">
            {/* Description Section */}
            <div className="internship-content">
              <h2 className="internship-subtitle">THE INTERNSHIP PROGRAMME</h2>
              <h1 className="internship-title">Your Launchpad for Change.</h1>
              <div className="internship-body-text">
                <p>
                  This is for the doers, the learners, and the future leaders.
                  Our internship isn't about paperwork; it's about
                  boots-on-the-ground action. You’ll dive into real-world
                  projects from menstrual health workshops and financial
                  literacy camps to social entrepreneurship and "UNplastic"
                  sustainability drives.
                </p>
                <p>
                  It’s an immersive experience designed to build your leadership
                  skills while creating measurable, grassroots impact in real
                  communities.
                </p>
              </div>

              {!showForm && (
                <button
                  className="internship-btn mt-2"
                  onClick={() => setShowForm(true)}
                >
                  Apply Now <i className="fas fa-chevron-down ms-2"></i>
                </button>
              )}
            </div>

            {/* Iframe Roll-down Section */}
            <div className={`form-roll-down ${showForm ? "visible" : ""}`}>
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden bg-white">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScOFZDTWGvxy6VQ82GVr-uVa7i4LMZCRISp1jKsUP8Rs9odvg/viewform?embedded=true"
                  width="100%"
                  height="1200" /* Adjusted height for better UX; Google Forms will scroll inside */
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="GITA Internship Form"
                >
                  Loading…
                </iframe>
              </div>

              {showForm && (
                <div className="text-center mt-4">
                  <button
                    className="btn btn-link text-muted text-decoration-none"
                    onClick={() => setShowForm(false)}
                  >
                    <i className="fas fa-chevron-up me-2"></i> Close Form
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
