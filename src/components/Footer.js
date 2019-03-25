import React from "react";
import "../sass/Footer.scss";
import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope);

library.add(faGithub, faLinkedin);
const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="container bg-dark">
        <div className="row">
          <div className="col-md-4">
            <h1 className="heading-footer">E aí?</h1>
          </div>
          <div className="col-md-4">
            <p className="text-footer">
              Vamos trabalhar juntos! A minha vontade de aprender novas
              tecnologias é gigante!
            </p>
          </div>
          <div className="col-md-4">
            <NavLink to="/contact" className="btn-rounded">
              Fale comigo!
            </NavLink>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NavLink exact to="/">
              <h1 className="logo">Logo</h1>
            </NavLink>
            <h1 className="phrase-footer">
              Programação é assim, né? Hoje estamos mais atualizados que ontem e
              menos que amanhã.
            </h1>
            <div className="icon-list">
              <a
                href="https://github.com/ncesar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={["fab", "github"]} />
              </a>
              <a
                href="https://www.linkedin.com/in/cesarnascimentoo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={["fab", "linkedin"]} />
              </a>
              <a href="mailto:ceesar90@gmail.com?Subject=Oi">
                <FontAwesomeIcon className="icons" icon="envelope" />
              </a>
            </div>
            <h2 className="info-footer">
              Quer saber como esse site foi desenvolvido?{" "}
              <strong>
                <NavLink to="/about">Clique aqui!</NavLink>
              </strong>
            </h2>
            <h2 className="copyright-footer">© César Nascimento - 2019</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
