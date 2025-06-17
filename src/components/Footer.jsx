import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {currentYear} Saptarshi Mandal . All rights reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:your@email.com">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
