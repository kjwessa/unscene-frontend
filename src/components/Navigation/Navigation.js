import React from "react";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Home
          </a>
        </li>
        <li className="navigation__item">
          <a href="/roadmap" className="navigation__link">
            Roadmap
          </a>
        </li>
        <li className="navigation__item">
          <a href="/about" className="navigation__link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
