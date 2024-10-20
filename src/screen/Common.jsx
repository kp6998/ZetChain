import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function TopBar() {
  return (
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="logo">
              <Link to="/home">
                <img src="img/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 d-none d-lg-block">
            <div className="row">
              <div className="col-6">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    <i className="flaticon-call"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Call Us</h3>
                    <p>
                      <i className="fa fa-phone-alt"></i>
                      <a className="pl-6px text-white hover-link" href="tel:+91 93443 18404">+91 93443 18404</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    <i className="flaticon-send-mail"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Email Us</h3>
                    <p>
                      <i className="fa fa-envelope"></i>
                      <a
                        className="pl-6px text-white hover-link"
                        href="mailto:tharkuritech@gmail.com"
                      >
                        tharkuritech@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NavBar() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(
    pathname === "/" ? "/home" : pathname
  );

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="nav-bar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a href="#" className="navbar-brand">
            MENU
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto">
              <Link
                to="/home"
                className={`nav-item nav-link ${
                  activeLink === "/home" ? "active" : ""
                }`}
                onClick={() => handleClick("/home")}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${
                  activeLink === "/about" ? "active" : ""
                }`}
                onClick={() => handleClick("/about")}
              >
                About
              </Link>
              <Link
                to="/service"
                className={`nav-item nav-link ${
                  activeLink === "/service" ? "active" : ""
                }`}
                onClick={() => handleClick("/service")}
              >
                Service
              </Link>
              <Link
                to="/team"
                className={`nav-item nav-link ${
                  activeLink === "/team" ? "active" : ""
                }`}
                onClick={() => handleClick("/team")}
              >
                Team
              </Link>
              <Link
                to="/projects"
                className={`nav-item nav-link ${
                  activeLink === "/projects" ? "active" : ""
                }`}
                onClick={() => handleClick("/projects")}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`nav-item nav-link ${
                  activeLink === "/contact" ? "active" : ""
                }`}
                onClick={() => handleClick("/contact")}
              >
                Contact
              </Link>
            </div>
            <div className="ml-auto">
              <a className="btn" href="#">
                Get A Quote
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-lg-9">
            <div className="footer-contact">
              <h2>Office Contact</h2>
              <p>
                <i className="fa fa-map-marker-alt"></i>Kumbakonam - 612 001
              </p>
              <p>
                <i className="fa fa-phone-alt"></i>
                <a className="text-white hover-link" href="tel:+91 93443 18404">+91 93443 18404</a>
              </p>
              <p>
                <i className="fa fa-envelope"></i>
                <a className="text-white hover-link" href="mailto:tharkuritech@gmail.com">
                  tharkuritech@gmail.com
                </a>
              </p>
              <div className="footer-social">
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
                {/* <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a> */}
                <a href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/team">Our Team</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; <a href="#">Tharkuri Tech</a>, All Right Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Designed By{" "}
              <a href="https://Tharkuri.com" target="blank">
                Tharkuri Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
