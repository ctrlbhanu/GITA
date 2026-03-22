import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-contact">
              <h2>Contact Us</h2>
              <a
                href="https://maps.app.goo.gl/n45VJKtki6Hye9NU9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa fa-map-marker-alt"></i>Bhopal, Madhya
                  Pradesh, India
                </p>
              </a>
              <a href="mailto:info@gita-global.in">
                <p>
                  <i className="fa fa-envelope"></i>info@gita-global.in
                </p>
              </a>
              <div className="footer-social">
                <a
                  className="btn btn-custom"
                  href="https://www.instagram.com/_gitaglobal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-custom"
                  href="https://www.linkedin.com/company/global-initiative-for-transformative-actions/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Popular Links</h2>
              <Link to="/about">About Us</Link>
              <Link to="/initiatives">Initiatives</Link>
              <Link to="/programme">Programmes</Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Useful Links</h2>
              <Link to="/terms-of-use">Terms of Use</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              © <Link to="/">GITA</Link> | 2026, All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
