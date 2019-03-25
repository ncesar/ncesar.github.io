import React from "react";
import "../sass/Content.scss";
import cesar from "../img/cesar.jpg";
import hero from "../img/hero.svg";

const Content = (props) => {
  return (
    <section className="Content">
      <div id="content">
        <h1>{props.job}</h1>
        <p>{props.college}</p>
        <img src={cesar} className="img-circle" alt="Imagem do meu avatar" />
        <div className="hero">
          <img
            src={hero}
            className="hero-img"
            alt="Imagem de um computador e acessórios"
          />
        </div>
        <div className="container-fluid sobre">
          <div className="row">
            <div className="col-md-10">
              <h1 className="heading-sobre">
                Oi, meu nome é César. Que bom ver você aqui!
              </h1>
              <p className="text-sobre">
                Desde cedo eu sempre amei ficar no computador e claro, jogar. E
                foi com os jogos que eu descobri a minha paixão com programação.
                No
                <a
                  href="https://tibia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Tibia{" "}
                </a>
                eu começava a mexer em arquivos .lua, HTML e no
                <a
                  href="https://sa-mp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  GTA San Andreas{" "}
                </a>
                em arquivos .pawn(C++), e assim eu fui descobrindo novas
                tecnologias. Já trabalhei remotamente e presencialmente para
                criar produtos para o meio digital e meu foco é sempre programar
                com paixão. Eu sou confiante do que sou capaz, curioso e sempre
                disposto para aprender novas tecnologias.
                <br />
                Meu objetivo atual é se tornar um{" "}
                <strong>Desenvolvedor Full Stack.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
