import "../styles/Block3.css";

import service1 from "../assets/services_1.png";
import service2 from "../assets/services_2.png";
import service3 from "../assets/services_3.png";
import service4 from "../assets/services_4.png";
import service5 from "../assets/services_5.png";
import service6 from "../assets/services_6.png";

function Block3() {
  const ServicesItems = [
    {
      id: 1,
      image: service1,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 2,
      image: service2,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 3,
      image: service3,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 4,
      image: service4,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 5,
      image: service5,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      id: 6,
      image: service6,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  ];
  
  return (
    <section className="block3-section" id="services">
      <h2 className="services-title">Услуги</h2>
      <div className="services-grid">
        {ServicesItems.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-image-container">
              <img 
                src={service.image} 
                alt={service.title}
                className="service-image"
              />
              <div className="service-overlay">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-button">заказать</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Block3;