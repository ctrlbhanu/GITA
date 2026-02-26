import Navbar from "../components/Navbar";
import space from "../assets/Space.mp4";
import "../css/home.css";
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";

import Landing from "../components/Landing";

import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <div className="video-container">
        <video src={space} type="video/mp4" autoPlay loop muted>
          Sorry, your browser doesn't support videos.
        </video>
        <div className="typewriter">
          <h2>WORLD IS OUR FAMILY </h2>
        </div>
      </div>
      <Landing />
      <BackToTop />
    </>
  );
}
