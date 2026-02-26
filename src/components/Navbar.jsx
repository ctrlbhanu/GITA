import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";
import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [auth, setAuth] = useState("");
  const path = useLocation().pathname;

  useEffect(() => {
    const isAdmin = localStorage.getItem("ADMIN_NGO");
    const isUser = localStorage.getItem("NGO");
    if (isAdmin) {
      setAuth("ADMIN");
    } else if (isUser) {
      setAuth("USER");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    const navbar = document.querySelector(".navbar");

    function toggleStickyNavbar() {
      if (navbar) {
        // Added a check to ensure navbar exists
        if (window.scrollY > 10) {
          navbar.classList.add("nav-sticky");
        } else {
          navbar.classList.remove("nav-sticky");
        }
      }
    }

    window.addEventListener("scroll", toggleStickyNavbar);
    return () => window.removeEventListener("scroll", toggleStickyNavbar);
  }, []);

  return (
    <>
      <div className="navbar navbar-expand-lg bg-dark navbar-dark px-0 fixed-top">
        <div className="container-fluid">
          {/* Logo and Full Form Stack */}
          <Link
            to="/"
            className="navbar-brand"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingLeft: "15px",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="GITA Logo"
              style={{
                height: "60px",
                width: "auto",
                objectFit: "contain",
              }}
            />
            <span>Global Initiative For Transformative Actions</span>
          </Link>

          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto px-4">
              <Link
                to="/"
                className={`nav-item nav-link ${path === "/" ? "active" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${path === "/about" ? "active" : ""}`}
              >
                About Us
              </Link>
              <Link
                to="/initiatives"
                className={`nav-item nav-link ${path === "/initiatives" ? "active" : ""}`}
              >
                Initiatives
              </Link>
              <Link
                to="/team"
                className={`nav-item nav-link ${path === "/team" ? "active" : ""}`}
              >
                Meet The Team
              </Link>
              <Link
                to="/advisory"
                className={`nav-item nav-link ${path === "/advisory" ? "active" : ""}`}
              >
                Advisory Committee
              </Link>
              <Link
                to="/contact"
                className={`nav-item nav-link ${path === "/contact" ? "active" : ""}`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
