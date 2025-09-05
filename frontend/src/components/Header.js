import React, { useState } from "react";
import "../styles/Header.css";
import logo_header from "../assets/logo_header.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="header-content">
        <nav className="header-nav">
          <div className="left-links">
            <a href="#about" onClick={() => handleNavClick("about")}>О нас</a>
            <a href="#portfolio" onClick={() => handleNavClick("portfolio")}>Портфолио</a>
          </div>

          <div className="logo-image">
            <img src={logo_header} alt="logo" />
          </div>

          <div className="right-links">
            <a href="#feedback" onClick={() => handleNavClick("feedback")}>Отзывы</a>
            <a href="#contacts" onClick={() => handleNavClick("contacts")}>Контакты</a>
          </div>

          <div className="hamburger-menu" onClick={toggleMenu}>
            <div
              className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
            ></div>
            <div
              className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
            ></div>
            <div
              className={`hamburger-line ${isMenuOpen ? "active" : ""}`}
            ></div>
          </div>
        </nav>

        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="side-menu-content">
            <div className="side-menu-header">
              <div className="side-menu-logo">
                <img src={logo_header} alt="logo" />
              </div>
            </div>
            <div className="side-menu-links">
              <a href="#about" onClick={() => handleNavClick("about")}>О нас</a>
              <a href="#portfolio" onClick={() => handleNavClick("portfolio")}>Портфолио</a>
              <a href="#feedback" onClick={() => handleNavClick("feedback")}>Отзывы</a>
              <a href="#contacts" onClick={() => handleNavClick("contacts")}>Контакты</a>
            </div>
          </div>
        </div>

        <div
          className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        ></div>

        <div className="header-notch"></div>
      </div>
    </header>
  );
};

export default Header;