/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../sass/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <NavLink exact to="/">
        <h1 className="logo">Logo</h1>
      </NavLink>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav>
        <ul>
          <li className="menu-item">
            <NavLink to="/monitoria">Monitoria</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/about">Sobre</NavLink>
          </li>
          <NavLink to="/contact" className="btn-rounded">
            <li className="menu-item">Fale comigo</li>
          </NavLink>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span />
      </label>
    </header>
  );
};

export default Header;
