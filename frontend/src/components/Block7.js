// components/BusinessCard.js
import React, { useState } from "react";
import "../styles/Block7.css";
import logo_header from "../assets/business_card_front.png";
import logo_back from "../assets/business_card_back.png";

const BusinessCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="business-card-section" id="contacts">
      <div className="container">
        <h2 className="business-card-title">Наша визитка</h2>
        <div className="business-card-container" onClick={handleCardClick}>
          <div className={`business-card ${isFlipped ? "flipped" : ""}`}>
            <div className="card-side card-front">
              <img
                src={logo_header}
                alt="Лицевая сторона визитки"
                className="card-image"
              />
            </div>
            <div className="card-side card-back">
              <img
                src={logo_back}
                alt="Обратная сторона визитки"
                className="card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCard;
