import React from "react";
import "../styles/Header.css";
import logo_header from "../assets/logo_header.png";


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Ваше содержимое хэдера */}
        <nav className="header-nav">
          <div className="left-links">
            <a href="#about">О нас</a>
            <a href="#portfolio">Портфолио</a>
          </div>
          <div className="logo-image">
            <img src={logo_header} alt="logo" />
          </div>
          <div className="right-links">
            <a href="#feedback">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </div>
        </nav>

        <div className="header-notch"></div>
      </div>
    </header>
  );
};

export default Header