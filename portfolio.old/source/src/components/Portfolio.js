import React from "react";
import "../sass/Portfolio.scss";
import { PortfolioList } from "./data/PortfolioList";
import { ManutencaoList } from "./data/ManutencaoList";

let portfolio = PortfolioList.map((portfolio, key) => {
  return (
    <div className="col-sm-12 col-md-6 col-xl-4 portfolio-item" key={key}>
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

let manutencao = ManutencaoList.map((manutencao, key) => {
  return <li key={key}>{manutencao.empresa}</li>;
});

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="separator" />
      <div className="container">
        <h1 className="heading-sobre">Alguns dos meus trabalhos</h1>
        <div className="row">
          {portfolio}
          <div className="col-md-12">
            <h2 className="secondary-sobre">
              Também trabalhei na manutenção dos seguintes sites:
            </h2>
            <ul className="manutencao">{manutencao}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
