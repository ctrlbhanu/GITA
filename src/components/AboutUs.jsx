import React, { useState } from "react";
import aboutImage from "../assets/about.png";
import "../css/AboutUs.css";

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about-full-section py-5">
      <div className="container">
        {/* Top Section: Side-by-Side Summary */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <div className="about-img-frame">
              <img
                src={aboutImage}
                alt="About Sanjivani"
                className="img-fluid rounded"
              />
            </div>
          </div>

          <div className="col-md-6 px-md-5">
            <h6 className="about-subtitle text-uppercase font-weight-bold mb-2">
              Learn About Us
            </h6>
            <h1 className="about-title display-4 mb-4">
              Building a Better <span className="highlight-text">Future</span>{" "}
              Together
            </h1>
            <p className="about-text-lead mb-3">
              We are a non-profit organization dedicated to empowering
              communities.
            </p>
            <p className="about-text-body">
              Our journey started with a simple mission: to ensure that every
              individual has access to the resources they need to thrive.
            </p>
            <button
              className="btn btn-outline-success btn-lg about-btn mt-3"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Bottom Section: Full-Width Vertical Expansion */}
        <div className={`expanded-content ${showMore ? "show" : ""}`}>
          <div className="content-inner p-4 p-md-5">
            {/* Section 1: History */}
            <div className="detail-section mb-5">
              <h2 className="text-success mb-3">Our History</h2>
              <p className="about-text-body">
                Founded in 2020, GITA began as a small community group in VIT
                and has grown into a structured NGO reaching hundreds of
                families. We started by providing basic meals and have expanded
                into full-scale educational support. Over the years, we have
                partnered with various local leaders to ensure our impact is
                both deep and sustainable.
              </p>
            </div>

            {/* Section 2: Goals */}
            <div className="detail-section mb-5 pt-4 border-top border-secondary">
              <h2 className="text-success mb-3">Our Goals</h2>
              <p className="about-text-body">
                Our primary goal is the total eradication of educational
                inequality. We aim to:
              </p>
              <ul className="about-text-body list-unstyled">
                <li>
                  <i className="fas fa-check text-success me-2"></i> Provide
                  quality education and digital literacy to 5000+ children by
                  2030.
                </li>
                <li>
                  <i className="fas fa-check text-success me-2"></i> Establish
                  permanent healthcare clinics in remote rural sectors.
                </li>
                <li>
                  <i className="fas fa-check text-success me-2"></i> Create
                  vocational training centers for women to foster financial
                  independence.
                </li>
              </ul>
            </div>

            {/* Section 3: Objectives */}
            <div className="detail-section pt-4 border-top border-secondary">
              <h2 className="text-success mb-3">Objectives</h2>
              <p className="about-text-body">
                To achieve our vision, we focus on measurable objectives:
                hosting monthly health check-ups, providing annual scholarships
                for higher education, and maintaining a transparent resource
                allocation system that ensures 90% of all donations go directly
                to field projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
