import React, { useState, useRef } from "react";
import "../css/chapterLeadership.css";

export default function ChapterLeadership() {
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
    <div className="container-fluid chapter-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11">
            <div className="chapter-content">
              <h2 className="chapter-subtitle mb-2">Chapter Leadership</h2>
              <h1 className="chapter-title mb-4">
                Your Movement, Our Support.
              </h1>

              <div className="chapter-body-text">
                <p>
                  Ready to be the face of change in your city or campus? Start a
                  GITA Chapter. We empower you with our proven impact models,
                  branding, and network so you can lead a local team, run your
                  own events, and build a legacy right where you are.
                </p>

                <p className="chapter-highlight mt-4">
                  Join GITA. Learn. Lead. Create impact.
                </p>
              </div>

              <div className="chapter-contact-footer mt-5">
                <h5 className="mb-3">Ready to start a chapter?</h5>
                <div className="d-flex flex-wrap gap-3">
                  {/* THE FIX: Replaced Email link with Apply Now toggle */}
                  {!showForm && (
                    <button className="chapter-btn" onClick={handleApplyClick}>
                      Apply Now <i className="fas fa-chevron-down ms-2"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* THE FIX: Added the hidden form section that rolls down */}
            <div
              ref={formRef}
              className={`form-roll-down ${showForm ? "visible" : ""}`}
            >
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden bg-white mt-4">
                You said
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf4SECe2_RARsKr1h6iJbW3aSne3N9iLxqeKAoHZVbJKZelPg/viewform?embedded=true"
                  width="640"
                  height="1331"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
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
