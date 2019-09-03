import React, {useState} from "react";
import logo from "../../assets/logo-querobolsa.svg";

const Header = () => {

  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <header>
      <div className="header-top-info">
        <div className="header-top-info-left">
          <div className="icon-container">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="info-circle"
              className="svg-inline--fa fa-info-circle fa-w-16 icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
            </svg>
            <div className="icon-text">
              <span className="mobile-content icon-text">Ajuda</span>
              <span className="desktop-content icon-text">Como funciona</span>
            </div>
          </div>
          <span className="header-separator desktop-content"></span>
          <div className="icon-container desktop-content header-whatsapp-container">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="whatsapp"
              className="svg-inline--fa fa-whatsapp fa-w-14 icon whatsapp-header-icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
            <div className="icon-text header-text-whatsapp">
              <a
                href="https://web.whatsapp.com/send?l=pt&amp;phone=558001232222"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-text-top-info">0800 123 2222</span>
              </a>
              <span className="icon-text-bottom-info">Envie mensagem ou ligue</span>
            </div>
          </div>
        </div>
        <div className="header-top-info-center">
          <img className="logo-header" src={logo} alt="logo do Quero Bolsa" />
        </div>
        <div className="header-top-info-right">
          <div className="icon-container">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="user-circle"
              className="svg-inline--fa fa-user-circle fa-w-16 icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
            </svg>
            <div className="icon-text">
              <span className="mobile-content icon-text">Conta</span>
              <span className="desktop-content icon-text">Nome Sobrenome</span>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul className="nav-main-ul">
          <li>
            <a href="#">Minha conta</a>
          </li>
          <li className="mobile-content menu-title" onClick={() => setOpenNavbar(!openNavbar)}>
            Menu
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down fa-w-14 menu-chevron"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </li>
          <ul className={openNavbar ? "dropdown-navbar navbar-opened" : "dropdown-navbar navbar-closed"}>
            <li>
              <a href="#">Pré matrículas</a>
            </li>
            <li>
              <a href="#" className="nav-item-active">Bolsas Favoritas</a>
            </li>
          </ul>
        </ul>
      </nav>
      <ul className="breadcrumb-container">
        <li className="breadcrumb-item desktop-content">Home</li>
        <li className="breadcrum-separator desktop-content">/</li>
        <li className="breadcrumb-item">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            className="svg-inline--fa fa-chevron-left fa-w-10 breadcrumb-chevron mobile-content"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
          </svg>
          Minha conta
        </li>
        <li className="breadcrum-separator desktop-content">/</li>
        <li className="breadcrumb-item breadcrumb-active desktop-content">Bolsas favoritas</li>
      </ul>
    </header>
  );
};

export default Header;
