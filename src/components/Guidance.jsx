import React from "react";
import "../css/Guidance.css";

export default function Guidance() {
  return (
    <div className="container-fluid guidance-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11">
            {" "}
            {/* Slightly wider for that edge-to-edge feel */}
            <div className="guidance-content">
              <h2 className="guidance-subtitle mb-2">The Guidance Programme</h2>
              <h1 className="guidance-title mb-4">Your Roadmap to Impact.</h1>

              <div className="guidance-body-text">
                <p>
                  We know that many want to give back but don't have the time or
                  resources to start an entire organization from scratch. The
                  Guidance Programme is designed for those with a heart for
                  service but a busy schedule.
                </p>

                <p>
                  We provide you with the platform, the framework, and the
                  professional support to lead specific community initiatives
                  without the administrative burden.
                </p>

                <p className="guidance-highlight mt-4">
                  You bring the passion; we provide the system to make it last.
                </p>
              </div>

              <div className="guidance-contact-footer mt-5">
                <h5 className="mb-3">Ready to lead an initiative?</h5>
                <a
                  href="mailto:globalita21@gmail.com?subject=Inquiry:%20The%20Guidance%20Programme"
                  className="guidance-btn"
                >
                  <i className="fas fa-envelope me-2"></i> Contact Us via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
