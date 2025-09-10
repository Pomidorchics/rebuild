import React, { useEffect, useRef } from "react";
import "../styles/Block1.css";
import specification1 from "../assets/briefcase.png";
import specification2 from "../assets/man_with_stars.png";
import specification3 from "../assets/document.png";
import specification4 from "../assets/free.png";

// Создаем функциональный компонент
// Имя компонента всегда с большой буквы!
function Block1() {
  const specifications = [
    {
      id: 1,
      image: specification1,
      description: "ГАРАНТИЯ РАБОТЫ",
    },
    {
      id: 2,
      image: specification2,
      description: "ОПЫТНАЯ БРИГАДА",
    },
    {
      id: 3,
      image: specification3,
      description: "РАБОТАЕМ ПО ДОГОВОРУ",
    },
    {
      id: 4,
      image: specification4,
      description: "БЕСПЛАТНЫЙ ВЫЕЗД МАСТЕРА",
    },
  ];


  // Возвращаем JSX - разметку нашего блока
  return (
    <section className="block1-section" id="about">
      <div className="block1-content">
        <h1 className="block1-title">REBUILD YOUR FUTURE</h1>
        <p className="block1-text">
          текст для понятности что мы делаем <br />
          текст для понятности что мы делаем
          <br />
          текст для понятности что мы делаем
        </p>
        <button className="block1-button">заказать</button>
        <p className="block1-greeting">Наше видеоприветствие</p>
        <video
          className="video-player"
          controls // убрать, если не нужны элементы управления
          autoPlay // автоматическое воспроизведение
          muted // обязательно для autoPlay в большинстве браузеров
          loop // зацикливание видео
          playsInline // для корректной работы на iOS
        >
          <source src="../videos/video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <div className="company-features">
          {specifications.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-item"
            >
              <div className="feature-content">
                <div className="feature-image">
                  <img src={feature.image} alt={feature.description} />
                </div>
                <div className="feature-text">
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Обязательно экспортируем компонент, чтобы использовать в других файлах
export default Block1;