// src/Cards.js
import React from 'react';
import './styles.css';
import { cardData, fullCardData } from './utils';


const Card = ({ img, link, title, description }) => {
  return (
    <div className={"card"}>
      <div className="card-img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="card-body">
        <span className="bg"></span>
        <span className="bg"></span>
        <span className="bg"></span>
        <a href={link} target="_blank" className="content" rel="noopener noreferrer">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </a>
      </div>
    </div>
  );
};


const CardFull = ({ img, link, title, description }) => {
  return (
    <div className={"cardFull"}>
      <div className="card-img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="card-body">
        <span className="bg"></span>
        <span className="bg"></span>
        <span className="bg"></span>
        <a href={link} target="_blank" className="content" rel="noopener noreferrer">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </a>
      </div>
    </div>
  );
};

const Cards = () => {
    return (
    <div className="cardsContainer">
      <h3>Dashboards</h3>
      <p>Propuestas derivadas de los mecanismos de <span>Participación Ciudadana</span></p>
      <div className="card-container">
      <CardFull
        img={fullCardData.img}
        link={fullCardData.link}
        title={fullCardData.title}
        description={fullCardData.description}
        fullWidth={true}
      />
      </div>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            link={card.link}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
