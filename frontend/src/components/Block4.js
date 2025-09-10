import React, { useState } from 'react';
import '../styles/Block4.css';

import room1 from '../assets/room1.svg';
import room2 from '../assets/room2.svg';
import room3 from '../assets/room3.svg';
import room4 from '../assets/room4.svg';

function Block4() {
  const [activePoint, setActivePoint] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const roomTitles = ["Ванная", "Спальня", "Гостиная", "Кухня"];

  const carouselItems = [
    {
      id: 1,
      image: room1,
      title: "Ванная",
      points: [
        {
          id: 1,
          type: 'wall',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 40,
          y: 40
        },
        {
          id: 2,
          type: 'ceiling',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 50,
          y: 15
        },
        {
          id: 3,
          type: 'floor',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 50,
          y: 90
        }
      ]
    },
    {
      id: 2,
      image: room2,
      title: "Спальня",
      points: [
        {
          id: 1,
          type: 'wall',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 40,
          y: 40
        },
        {
          id: 2,
          type: 'ceiling',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 50,
          y: 15
        },
        {
          id: 3,
          type: 'floor',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 50,
          y: 90
        }
      ]
    },
    {
      id: 3,
      image: room3,
      title: "Гостиная",
      points: [
        {
          id: 1,
          type: 'wall',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 40,
          y: 40
        },
        {
          id: 2,
          type: 'ceiling',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 50,
          y: 15
        },
        {
          id: 3,
          type: 'floor',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 50,
          y: 90
        }
      ]
    },
    {
      id: 4,
      image: room4,
      title: "Кухня",
      description: "Lorem ipsum",
      points: [
        {
          id: 1,
          type: 'wall',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 40,
          y: 40
        },
        {
          id: 2,
          type: 'ceiling',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 50,
          y: 15
        },
        {
          id: 3,
          type: 'floor',
          title: "Lorem ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          x: 50,
          y: 90
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
    setActivePoint(null); // Сбрасываем активную точку при смене слайда
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
    setActivePoint(null); // Сбрасываем активную точку при смене слайда
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setActivePoint(null); // Сбрасываем активную точку при смене слайда
  };

  const handlePointClick = (point) => {
    if (activePoint === point.id) {
      setActivePoint(null);
    } else {
      setActivePoint(point.id);
    }
  };

  const currentRoom = carouselItems[currentIndex];

  return (
    <section className="carousel-section" id="overview">
      <h2 className="carousel-main-title">Обзор квартиры</h2>

      <div className="carousel-subheader">
        <button className="carousel-button carousel-button-prev" onClick={prevSlide}>
          &#8249;
        </button>

        <h3 className="carousel-room-title">{currentRoom.title}</h3>

        <button className="carousel-button carousel-button-next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      
      <div className="carousel-container">
        <div className="carousel-track">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="slide-content">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="slide-image"
                />
                
                {item.points.map((point) => (
                  <div key={point.id}>
                    <button
                      className={`hotspot hotspot-${point.type} ${
                        activePoint === point.id ? 'active' : ''
                      }`}

                      onClick={() => handlePointClick(point)}
                      aria-label={point.title}
                    >
                      <span className="hotspot-icon">+</span>
                    </button>

                    {/* Линия и текст */}
                    <div className={`annotation annotation-${point.type} ${
                      activePoint === point.id ? 'active' : ''
                    }`}>
                      <div className="annotation-line"></div>
                      <div className="annotation-content">
                        <h4>{point.title}</h4>
                        <p>{point.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Индикаторы (точки) */}
      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Перейти к ${roomTitles[index]}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Block4;