// portfolio
import React, { useState } from "react";
import "../styles/Block2.css";
import portfolio1 from "../assets/portfolio_1.png";
import portfolio2 from "../assets/portfolio_2.png";
import portfolio3 from "../assets/portfolio_3.png";
import portfolio4 from "../assets/portfolio_4.png";

const Portfolio = () => {
  const PortfolioItems = [
    {
      id: 1,
      image: portfolio1,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 2,
      image: portfolio2,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 3,
      image: portfolio3,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 4,
      image: portfolio4,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio-title">Наше портфолио</h2>
        <div className="portfolio-grid">
          {PortfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={
                "portfolio-item ${index % 2 === 0 ? 'left-layout' : 'right_layout'}"
              }
            >
              <div className="portfolio-content">
                <div className="portfolio-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="portfolio-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
