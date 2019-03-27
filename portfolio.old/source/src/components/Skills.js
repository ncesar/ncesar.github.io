import React from "react";
import "../sass/Skills.scss";
import { LanguageList } from "./data/LanguageList";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";

library.add(faFileCode);
library.add(faHandsHelping);

const Skills = () => {
  //criando um array das linguagens
  let linguagem = LanguageList.map((linguagem, key) => {
    return (
      <li className="list" key={key}>
        {linguagem.name}
      </li>
    );
  });
  let framework = LanguageList.map((linguagem, key) => {
    return <li key={key}>{linguagem.framework}</li>;
  });

  return (
    <section id="skills">
      <div className="container skills">
        <div className="row">
          <div className="col-md-6">
            <FontAwesomeIcon className="icon" icon="file-code" size="2x" />
            <h1 className="heading-skills">Desenvolvedor Front-end</h1>
            <p>
              Gosto de criar websites me baseando em algum design e também pela
              criatividade.
            </p>
            <p className="text-skills">Linguagens:</p>
            <ul className="skill-list">{linguagem}</ul>
            <p className="text-skills">Frameworks e Ferramentas:</p>
            <ul className="skill-list">{framework}</ul>
          </div>
          <div className="col-md-6">
            <FontAwesomeIcon className="icon" icon="hands-helping" size="2x" />
            <h1 className="heading-skills">Monitoria</h1>
            <p>
              Sou um grande apoiador de espalhar conhecimento sem cobrar o
              próximo, para isso, conto com um canal no{" "}
              <a
                href="https://youtube.com/cesarn1"
                rel="noopener noreferrer"
                target="_blank"
              >
                YouTube
              </a>{" "}
              onde eu compartilho tecnologias e boas práticas de programação.
            </p>
            <a
              className="btn-youtube"
              href="https://youtube.com/cesarn1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conheça o canal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
