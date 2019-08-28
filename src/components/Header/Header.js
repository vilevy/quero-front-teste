import React from "react";
import './Header.css'
import logo from '../../assets/logo-querobolsa.svg';

const Header = () => {
  return (
    <header>
      <div className="header-top-info">
        <div>
          <i>ÍCONE</i>
          <span>Como funciona</span>
        </div>
        <div>
          <i>ÍCONE WA</i>
          <a
            href="https://web.whatsapp.com/send?l=pt&amp;phone=558001232222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>0800 123 2222</span>
          </a>
          <span>Envie mensagem ou ligue</span>
        </div>
        <img className="logo-header" src={logo} alt="logo do Quero Bolsa" />
        <div>
          <span>Nome Sobrenome</span>
          <i>ÍCONE USER</i>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#">Minha conta</a></li>
          <li><a href="#">Pré matrículas</a></li>
          <li><a href="#">Bolsas Favoritas</a></li>
        </ul>
      </nav>
      <div className="breadcrumb">
        <span>Home</span>
        <span className="breadcrumb-separator">/</span>
        <span>Minha conta</span>
        <span className="breadcrumb-separator">/</span>
        <span>Bolsas favoritas</span>
      </div>
    </header>
  );
};

export default Header;
