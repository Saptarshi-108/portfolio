import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import "../utils/buttons.css";

const Navbar = () => {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";

  return (
    <nav className={`navbar ${isResumePage ? "navbar-dark" : ""}`}>
      <ul className="navbar-list">
        <li>
          <Link to="/" className="btn-4">
            Home
          </Link>
        </li>
        <li>
          <a href="#aboutme" className="btn-4">
            About
          </a>
        </li>
        <li>
          <a href="#skill-items" className="btn-4">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="btn-4">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
