import React from "react";
import "../sass/Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="heading-contact">Ei, vamos conversar!</h1>
            <h2 className="secondary-contact">
              Quer trabalhar junto, tirar uma dúvida ou simplesmente me
              agradecer? Preencha o formulário abaixo e eu te retornarei!
            </h2>
            <form
              action="https://formspree.io/ceesar90@gmail.com"
              method="POST"
              className="formulario"
            >
              <input type="text" name="name" placeholder="Seu nome" />
              <input type="email" name="_replyto" placeholder="Seu email" />
              <textarea
                name="about"
                placeholder="Fale um pouco sobre o assunto"
              />
              <input type="submit" value="Enviar" className="btn-submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
