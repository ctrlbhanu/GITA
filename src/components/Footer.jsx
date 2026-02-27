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
                  <i className="fa fa-map-marker-alt"></i>Address
                </p>
              </a>
              <a href="mailto:globalita21@gmail.com">
                <p>
                  <i className="fa fa-envelope"></i>globalita21@gmail.com
                </p>
              </a>
              <div className="footer-social">
                <a
                  className="btn btn-custom"
                  href="https://www.instagram.com/_gitaglobal/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-custom"
                  href="https://www.linkedin.com/company/global-initiative-for-transformative-actions/"
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
