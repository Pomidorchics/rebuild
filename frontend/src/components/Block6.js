import React, { useState } from "react";
import "../styles/Block6.css";
import worker1 from "../assets/worker.png";
import worker2 from "../assets/worker.png";
import worker3 from "../assets/worker.png";
import worker4 from "../assets/worker.png";

const Workers = () => {
  const [activeCard, setActiveCard] = useState(null);

  const WorkerItems = [
    {
      id: 1,
      image: worker1,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 2,
      image: worker2,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 3,
      image: worker3,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 4,
      image: worker4,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
  ];

  const toggleCard = (id) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  return (
    <section className="workers-section" id="workers">
      <div className="workers-container">
        <h2 className="workers-title">О КОМПАНИИ</h2>
        <div className="workers-grid">
          {WorkerItems.map((item) => (
            <div
              key={item.id}
              className={`worker-card ${
                activeCard === item.id ? "active" : ""
              }`}
            >
              <div className="worker-image-container">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="worker-info">
                <h3 className="worker-name">{item.title}</h3>
                <p className="worker-description">{item.description}</p>
                <button
                  className="worker-toggle-btn"
                  onClick={() => toggleCard(item.id)}
                  aria-label="Toggle information"
                ></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workers;
