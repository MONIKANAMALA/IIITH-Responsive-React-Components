import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS


const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="mb-0">&copy; 2023 Melody Music App. All rights reserved.</p>
          <div className="social-links mt-2 d-flex flex-wrap justify-content-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-2">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
