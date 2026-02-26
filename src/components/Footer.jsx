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
                href="https://maps.app.goo.gl/HQg6gMPpAJ445cda6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  <i className="fa fa-map-marker-alt"></i>address
                </p>
              </a>
              <a href="tel:+91-7385223242">
                <p>
                  <i className="fa fa-phone"></i>Phone no
                </p>
              </a>
              <a href="mailto:sanjivani.vitswd@vit.edu">
                <p>
                  <i className="fa fa-envelope"></i>mail.id
                </p>
              </a>
              <div className="footer-social">
                <a
                  className="btn btn-custom"
                  href="https://www.instagram.com/vitsocials/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-custom"
                  href="https://www.linkedin.com/company/vit-social-welfare-development/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Popular Links</h2>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/event">Initiatives</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Useful Links</h2>
              <a href="#">Terms of use</a>
              <a href="#">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; <a href="#">GITA</a> | 2026, All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
