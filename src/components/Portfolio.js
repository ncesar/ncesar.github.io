import React from "react";
import "../sass/Portfolio.scss";
import { PortfolioList } from "./data/PortfolioList";

let portfolio = PortfolioList.map((portfolio, key) => {
  return (
    <div className="col-md-6 portfolio-item" key={key}>
      <img src={portfolio.image} alt="Imagem do Portfolio" />
      <figcaption className="portfolio-info">
        <h1 className="portfolio-heading">{portfolio.description}</h1>
        <a href={portfolio.button} target="_blank" rel="noopener noreferrer">
          Visitar
        </a>
      </figcaption>
    </div>
  );
});

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="separator" />
      <div className="container">
        <h1 className="heading-sobre">Alguns dos meus trabalhos</h1>
        <div className="row">{portfolio}</div>
      </div>
    </section>
  );
};

export default Portfolio;
