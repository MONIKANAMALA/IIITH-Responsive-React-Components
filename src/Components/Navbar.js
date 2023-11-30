import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaHome, FaComments, FaChartPie, FaTable, FaMusic, FaImage } from 'react-icons/fa';
import music from "./Images/music.avif";
import '../Styles/Navbar.css'; 
const Navbar = () => {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
  const handleOffcanvasToggle = () => {
    setOffcanvasOpen(!isOffcanvasOpen);
  };

  const handleNavLinkClick = () => {
    // Close the offcanvas menu when a link is clicked
    setOffcanvasOpen(false);
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <FaMusic className="music-icon" /> Melody Music App
        </Link>
        <div className="d-flex"></div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleOffcanvasToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`offcanvas offcanvas-end text-bg-dark ${isOffcanvasOpen ? 'show' : ''}`}
          tabIndex="-1"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <img src={music} alt="Melody Music App Logo" style={{ maxHeight: '100px', marginRight: '10px', borderRadius: "50%" }} />
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={handleOffcanvasToggle}
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                  <FaHome /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Home" onClick={handleNavLinkClick}>
                  <FaImage /> Cards
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Reports" onClick={handleNavLinkClick}>
                  <FaTable /> Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Charts" onClick={handleNavLinkClick}>
                  <FaChartPie /> Charts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Feedback" onClick={handleNavLinkClick}>
                  <FaComments /> Feedback
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
