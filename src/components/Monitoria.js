import React from "react";
import "../sass/Monitoria.scss";
import helping from "../img/helping.png";

const Monitoria = () => {
  return (
    <section className="monitoria">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="monitoria-heading">
              Eu não te conheço mas mesmo assim quero te ajudar!
            </h1>
            <h2 className="monitoria-secondary">
              Tem alguma dúvida? Conte com meus vídeos no YouTube, e se ainda
              sim a dúvida permanecer, entre em contato!
            </h2>
            <img
              src={helping}
              alt="Pessoas se ajudando"
              className="img-helping"
            />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 content">
              <h1 className="monitoria-heading">
                Aprender sozinho é díficil, eu sei!
              </h1>
              <p className="monitoria-secondary">
                Desde o início eu sempre soube que se eu quisesse conseguir meu
                espaço no mercado de trabalho, eu NÃO poderia contar APENAS com
                a faculdade, e foi(e continua sendo) uma longa caminhada para
                conseguir aprender conteúdos sozinhos, por mim mesmo, sem ter
                alguém para perguntar além do Stackoverflow. Eu te entendo e
                quero te ajudar.
                <br /> Por que? Por quê não?{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monitoria;
