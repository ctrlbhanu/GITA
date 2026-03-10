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
              GITA is a youth-led impact ecosystem built on one belief:
              privilege carries responsibility.
            </p>
            <p className="about-text-body">
              What began in 2019 as Ritva Foundation an initiative to de-mystify
              menstrual stigma has evolved into a multidimensional platform
              driving women’s empowerment, child welfare, environmental
              sustainability, financial literacy, and community-led
              transformation. Rooted in purpose. Growing through action.
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
                Founded in 2017 by Tanisha Pandit, a Delhi University alumna,
                Ritva Foundation began with a simple mission, to break the
                silence around menstruation. At a time when myths and stigma
                dominated conversations, Ritva chose awareness, accuracy, and
                sustainability. Through university outreach and community
                workshops, we de-mystified menstrual taboos, promoted
                biodegradable “UNplastic” products, encouraged safe disposal
                practices, and collaborated with organizations like CAPED for
                cervical health awareness, growing into a student-led movement
                for informed, sustainable change.
              </p>
            </div>

            {/* Section 2: Goals */}
            <div className="detail-section mb-5 pt-4 border-top border-secondary">
              <h2 className="text-success mb-3">Our Goals</h2>
              <p className="about-text-body">
                Our primary goal is the total eradication of educational
                inequality. We aim to:
              </p>

              {/* Added 'ps-4' for indentation and 'colored-bullets' for custom bullet colors */}
              <ul className="about-text-body ps-4 colored-bullets">
                <li className="mb-2">
                  Normalize menstrual and reproductive health conversations
                  through structured workshops and expanding campus outreach
                  annually.
                </li>
                <li className="mb-2">
                  Strengthen cervical health awareness through informed sessions
                  and preventive education partnerships.
                </li>
                <li className="mb-2">
                  Increase adoption of biodegradable, “UNplastic” menstrual
                  products to reduce plastic waste and promote sustainable
                  practices.
                </li>
                <li className="mb-2">
                  Advance women’s empowerment through measurable leadership,
                  skill-building, and financial literacy initiatives.
                </li>
                <li className="mb-2">
                  Build financial confidence among young women through
                  practical, action-oriented economic education programs.
                </li>
                <li className="mb-2">
                  Encourage social entrepreneurship by nurturing youth-led,
                  solution-driven community initiatives.
                </li>
                <li className="mb-2">
                  Expand ethical, youth-led chapters that transform awareness
                  into consistent, accountable grassroots action.
                </li>
                <li className="mb-2">
                  Develop scalable, repeatable impact frameworks aligned with
                  long-term sustainable development goals.
                </li>
              </ul>
            </div>

            {/* Section 3: Objectives */}
            <div className="detail-section pt-4 border-top border-secondary">
              <h2 className="text-success mb-3">Objectives</h2>
              <p className="about-text-body">
                Headquartered in Bhopal and active across Delhi-NCR, GITA
                continues to expand its chapters, collaborations, and on-ground
                initiatives. Not a campaign. A long-term commitment to
                transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
