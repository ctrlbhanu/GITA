import React from "react";
import "../css/page_header.css";
// IMPORT YOUR IMAGE DIRECTLY HERE (Make sure this path is correct!)
import headerBg from "../assets/page-header.jpg";

export default function PageHeader({ title }) {
  return (
    <div className="page-header-wrapper">
      {/* LAYER 1: The Physical Image (Acts as background) */}
      <img
        src={headerBg}
        alt="Header Background"
        className="header-physical-bg"
      />

      {/* LAYER 2: The Dark Gradient Overlay */}
      <div className="header-dark-overlay"></div>

      {/* LAYER 3: Your Text Content */}
      <div className="container header-content">
        <div className="row">
          <div className="col-12 text-center">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
