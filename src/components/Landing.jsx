import "../css/landing.css";
import main from "../assets/LandImg.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing">
        <div className="left">
          <div className="caption1">
            <hr />
            <h4>WE ARE GITA</h4>
          </div>

          <div className="titles">
            <div className="caption2">
              <p>
                Rooted in <span>Purpose, </span>
                <br />
                Rising in <span> Action.</span>
              </p>
            </div>

            <div className="caption3">
              <p>
                From breaking stigma to building systems, GITA carries forward
                Ritva’s mission: youth-led, community-driven, and built to last.
              </p>
            </div>

            <div className="btns">
              <button
                onClick={() => navigate("/about")}
                type="button"
                className="btn btn-outline-info"
              >
                Know More
              </button>
            </div>
          </div>
        </div>

        <div className="right">
          <img src={main} alt="Smiling Faces" />
        </div>
      </div>

      {/* --- CLEAN STATIC IMPACT COUNTER SECTION --- */}
      <div
        className="container mt-2 mb-5 text-center"
        style={{ maxWidth: "900px" }}
      >
        <div className="row justify-content-center align-items-center">
          {/* Counter 1: Impact (100,000) */}
          <div className="col-md-6 col-6">
            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
              {({ isVisible }) => (
                <div className="clean-counter">
                  <h2 className="fw-bold mb-0">
                    {isVisible ? (
                      <CountUp end={100} duration={2.5} suffix="K+" />
                    ) : (
                      "0"
                    )}
                  </h2>
                  <p className="fw-bold text- mb-0 mt-2">Voices Amplified</p>
                </div>
              )}
            </VisibilitySensor>
          </div>

          {/* Counter 2: Youth Engaged (10,000) */}
          <div className="col-md-6 col-6">
            <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
              {({ isVisible }) => (
                <div className="clean-counter">
                  <h2 className="fw-bold mb-0">
                    {isVisible ? (
                      <CountUp end={10} duration={2.5} suffix="K+" />
                    ) : (
                      "0"
                    )}
                  </h2>
                  <p className="fw-bold text- mb-0 mt-2">Hands at Work</p>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </>
  );
}
