import React from "react";
import "../css/chapterLeadership.css";

export default function ChapterLeadership() {
  return (
    <div className="container-fluid chapter-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11">
            <div className="chapter-content">
              <h2 className="chapter-subtitle mb-2">CHAPTER LEADERSHIP</h2>
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
                  {/* Email Button */}
                  <a
                    href="mailto:globalita21@gmail.com?subject=Inquiry:%20Chapter%20Leadership"
                    className="chapter-btn"
                  >
                    <i className="fas fa-envelope me-2"></i> Contact Us via
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
