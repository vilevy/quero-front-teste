import React from "react";

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-ctas">
        <div>
          <i>ÍCONE</i>
          <span>0800 123 222</span>
          <span>Seg - Sex 8h-22h</span>
        </div>
        <div>
          <i>ÍCONE</i>
          <span>Chato ao vivo</span>
          <span>Seg - Sex 8h-22h</span>
        </div>
        <div>
          <i>ÍCONE</i>
          <span>Mande um e-mail</span>
          <span>Respondemos rapidinho</span>
        </div>
        <div>
          <i>ÍCONE</i>
          <span>Central de ajuda</span>
          <span>Encontre todas as respostas</span>
        </div>
      </div>
      <div className="footer-copyright">
        <span>Feito com s2 pela Quero Educação</span>
      </div>
    </footer>
  );
};

export default Footer;
