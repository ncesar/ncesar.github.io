import React from "react";
import about from "../img/about.png";
import "../sass/About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="monitoria-heading">
              A ideia foi seguir as melhores boas práticas atuais.
            </h1>
            <h2 className="monitoria-secondary">
              Algumas delas foram:
              <ul>
                <li>Compressão de imagens</li>
                <li>Conceitos e aplicações de SPA</li>
                <li>Criação do site como mobile first</li>
                <li>Minificação de arquivos</li>
                <li>
                  Utilização do <strong>ReactJS</strong>
                </li>
                <li>SASS</li>
                <li>Utilização de imagens e icones em SVG</li>
                <li>Webpack</li>
                <li>E vários outros conceitos/práticas</li>
              </ul>
            </h2>
            <img
              src={about}
              alt="Avatar com ícones de programação"
              className="img-helping"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
