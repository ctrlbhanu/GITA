import React, { useState, useRef } from "react";
import "../css/internship.css";

export default function InternshipForm() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null); // Reference to the form section

  const handleApplyClick = () => {
    setShowForm(true);

    // Small timeout ensures the 'visible' class is applied
    // and height is calculated before scrolling
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="container-fluid internship-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11">
            <div className="internship-content">
              <h2 className="internship-subtitle">The Internship Programme</h2>
              <h1 className="internship-title">Your Launchpad for Change.</h1>
              <div className="internship-body-text">
                <p>
                  This is for the doers, the learners, and the future leaders.
                  Our internship isn't about paperwork; it's about
                  boots-on-the-ground action.
                </p>
                <p>
                  It’s an immersive experience designed to build your leadership
                  skills while creating measurable, grassroots impact.
                </p>
              </div>

              {!showForm && (
                <button
                  className="internship-btn mt-2"
                  onClick={handleApplyClick}
                >
                  Apply Now <i className="fas fa-chevron-down ms-2"></i>
                </button>
              )}
            </div>

            {/* Scroll target is this div */}
            <div
              ref={formRef}
              className={`form-roll-down ${showForm ? "visible" : ""}`}
            >
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden bg-white">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScOFZDTWGvxy6VQ82GVr-uVa7i4LMZCRISp1jKsUP8Rs9odvg/viewform?embedded=true"
                  width="100%"
                  height="1000"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="GITA Internship Form"
                >
                  Loading…
                </iframe>
              </div>

              {showForm && (
                <div className="text-center mt-4 mb-5">
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
