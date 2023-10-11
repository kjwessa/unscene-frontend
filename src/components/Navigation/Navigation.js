import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            Home
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/about" className="navigation__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
