import React from 'react';
import "../styles/Block1.css";

// Создаем функциональный компонент
// Имя компонента всегда с большой буквы!
function Block1() {
  // Возвращаем JSX - разметку нашего блока
  return (
    <section className="block1-section" id="about">
      <div className="block1-content">
        <h1 className="block1-title">REBUILD YOUR FUTURE</h1>
        <p className="block1-text">
          текст для понятности что мы делаем <br />
          текст для понятности что мы делаем<br />
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
      </div>
    </section>
  );
}

// Обязательно экспортируем компонент, чтобы использовать в других файлах
export default Block1;