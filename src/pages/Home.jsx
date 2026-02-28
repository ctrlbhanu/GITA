import Navbar from "../components/Navbar";
import space from "../assets/Space.mp4";
// If you have a placeholder image, import it here:
// import spacePoster from "../assets/Space-poster.jpg";
import "../css/home.css";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <>
      <div className="video-container">
        {/* Added playsInline and moved src to a <source> tag */}
        <video
          autoPlay
          loop
          muted
          playsInline
          // poster={spacePoster} /* Uncomment and add an image to fix the "takes time to load" blank screen */
        >
          <source src={space} type="video/mp4" />
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
