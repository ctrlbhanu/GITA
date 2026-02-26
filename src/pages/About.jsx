import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import AboutUs from "../components/AboutUs";

import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader title="About Us" path="/about" name="About Us" />
      <AboutUs />
      <BackToTop />
    </>
  );
}
