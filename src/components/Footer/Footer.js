import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">© {currentYear} Unscene by Kevin Wessa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
