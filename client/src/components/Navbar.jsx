import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [navbarShadow, setNavbarShadow] = useState(false); // Track shadow state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle = {
    color: "#212529",
    fontWeight: "normal",
    cursor: "pointer",
    padding: "10px 15px",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
  };

  const activeNavLinkStyle = {
    fontWeight: "bold",
    color: "#28a745",
    borderLeft: "3px solid #28a745",
    paddingLeft: "12px",
    borderRadius: "5px",
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsCollapsed(true);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm  fixed-top py-4 ${navbarShadow ? "shadow-lg" : ""}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" onClick={() => setIsCollapsed(true)}>
          <span className="text-success fw-bold">Fiyo</span>Graphics
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNav">
          <ul className="navbar-nav mx-auto ">
            {["about", "services", "portfolio", "blog"].map((section) => (
              <li className="nav-item mb-2 mb-sm-0" key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  style={activeLink === section ? activeNavLinkStyle : navLinkStyle}
                  onClick={() => handleLinkClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex">
            <a href="#contact" className="btn btn-success rounded">
              
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
