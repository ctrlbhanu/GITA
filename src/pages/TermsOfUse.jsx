import React from "react";
import "../css/LegalPages.css";
const TermsOfUse = () => {
  return (
    <div className="legal-page-container">
      {/* Header Banner */}
      <div className="legal-header">
        <h1>Terms of Use</h1>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Main Content */}
      <div className="legal-content">
        <div className="legal-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these
            Terms of Use and all applicable laws and regulations. If you
            disagree with any part of the terms, then you may not access the
            service.
          </p>
        </div>

        <div className="legal-section">
          <h2>2. Intellectual Property</h2>
          <p>
            The website and its original content, features, and functionality
            are owned by us and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property or
            proprietary rights laws.
          </p>
        </div>

        <div className="legal-section">
          <h2>3. User Conduct</h2>
          <p>
            As a condition of use, you promise not to use the services for any
            purpose that is unlawful or prohibited by these Terms. You agree not
            to:
          </p>
          <ul>
            <li>Interfere with or disrupt the operation of the website.</li>
            <li>
              Attempt to gain unauthorized access to any part of the site.
            </li>
            <li>Use the service to transmit any harmful or malicious code.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall we, nor our directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your access to or use of or
            inability to access or use the Service.
          </p>
        </div>

        <div className="legal-section">
          <h2>5. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. What constitutes a material change will be
            determined at our sole discretion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
