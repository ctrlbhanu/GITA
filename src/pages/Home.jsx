import React from "react";
import spaceWebm from "../assets/Space.webm";
import spaceMp4 from "../assets/Space.mp4";

import "../css/home.css";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <>
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          /* REMOVED THE POSTER ATTRIBUTE HERE */
        >
          <source src={spaceWebm} type="video/webm" />
          <source src={spaceMp4} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>

        <div className="typewriter">
          <h2>WORLD IS OUR FAMILY </h2>
        </div>
      </div>
      <Landing />
    </>
  );
}
