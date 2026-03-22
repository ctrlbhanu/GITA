import React from "react";
import "../css/LegalPages.css";
const PrivacyPolicy = () => {
  return (
    <div className="legal-page-container">
      {/* Header Banner */}
      <div className="legal-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Main Content */}
      <div className="legal-content">
        <div className="legal-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to our Privacy Policy. Your privacy is critically important
            to us. This page explains our policies regarding the collection,
            use, and disclosure of Personal Information we receive from users of
            the site.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>
            We may ask you to provide us with certain personally identifiable
            information that can be used to contact or identify you. Personally
            identifiable information may include, but is not limited to:
          </p>
          <ul>
            <li>Your Name and Email Address</li>
            <li>Log Data (IP address, browser type, pages visited)</li>
            <li>Cookies and Usage Data</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. How We Use Your Data</h2>
          <p>
            We use the collected data for various purposes, including to provide
            and maintain our service, to notify you about changes, and to
            provide customer support. We will never sell your personal data to
            third parties.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Security</h2>
          <p>
            The security of your Personal Information is important to us, but
            remember that no method of transmission over the Internet, or method
            of electronic storage, is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Information,
            we cannot guarantee its absolute security.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us through the information provided in our website footer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
