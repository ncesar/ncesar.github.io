import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import "./vendor/bootstrap/bootstrap-reboot.min.css";
import "./vendor/bootstrap/bootstrap-grid.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Monitoria from "./components/Monitoria";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    header_infos: [
      {
        job: "Desenvolvedor Web",
        college: "Faculdade Guararapes - Ciência da Computação 5º Período"
      }
    ]
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Header} />
          <Route
            exact
            path="/"
            render={() => (
              <Content
                job={this.state.header_infos[0].job}
                college={this.state.header_infos[0].college}
              />
            )}
          />
          <Route exact path="/" component={Skills} />
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/" component={Timeline} />
          <Route path="/monitoria" component={Monitoria} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
