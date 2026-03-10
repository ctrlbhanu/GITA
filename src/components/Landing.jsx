import "../css/landing.css";
import main from "../assets/LandImg.png";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <span className="left">
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
      </span>

      <span className="right">
        <img src={main} alt="Smiling Faces" />
      </span>
    </div>
  );
}
