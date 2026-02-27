import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";
import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [auth, setAuth] = useState("");
  const path = useLocation().pathname;

  const closeMenu = () => {
    const navbarCollapse = document.getElementById("navbarCollapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

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
      <div className="navbar navbar-expand-lg navbar-dark px-0 fixed-top">
        <div className="container-fluid px-2 px-md-5">
          <Link
            to="/"
            className="navbar-brand d-flex flex-column align-items-center"
            style={{ textDecoration: "none" }}
          >
            <img
              src={logo}
              alt="GITA Logo"
              style={{
                height: "55px",
                width: "auto",
                objectFit: "contain",
              }}
            />
            <span
              className="mt-1 text-center"
              style={{
                color: "#28a745",
                fontWeight: "700",
                letterSpacing: "0.2px",
                whiteSpace: "nowrap", // Forces the single line
                // Responsive font size using Clamp: Min 8px, Preferred 1.5vw, Max 12px
                fontSize: "clamp(8px, 1.8vw, 12px)",
                lineHeight: "1",
              }}
            >
              GLOBAL INITIATIVE FOR TRANSFORMATIVE ACTIONS
            </span>
          </Link>

          <button
            type="button"
            className="navbar-toggler border-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-auto py-3 py-lg-0 text-center text-lg-start">
              <Link
                to="/"
                className={`nav-item nav-link ${path === "/" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${path === "/about" ? "active" : ""}`}
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link
                to="/initiatives"
                className={`nav-item nav-link ${path === "/initiatives" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Initiatives
              </Link>
              <Link
                to="/team"
                className={`nav-item nav-link ${path === "/team" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Meet The Team
              </Link>
              <Link
                to="/advisory"
                className={`nav-item nav-link ${path === "/advisory" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Advisory Committee
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
