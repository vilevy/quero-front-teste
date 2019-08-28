import React, { useState } from "react";

// components
import ModalResult from './ModalResult/ModalResult';

const ModalAddFavorites = ({ showModal, setShowModal }) => {
  return (
    <div className="modal">
      <span className="modal-close-btn" onClick={() => setShowModal(false)}>
        X
      </span>

      <div className="modal-container">
        <header>
          <h2>Adicionar bolsa</h2>
          <p>Filtre e adicione as bolsas de seu interesse.</p>
        </header>
        <div className="modal-main-content">
          <div className="modal-filters-container">
            <div className="modal-filter">
              <label>Selecione sua cidade</label>
              <input type="text" />
            </div>
            <div className="modal-filter">
              <label>Selecione o curso de sua preferência</label>
              <select name="course" id="course">
                <option value="">Nome do curso</option>
              </select>
            </div>
            <div className="modal-filter">
              <label>Como você quer estudar?</label>
              <input type="checkbox" id="presential" />
              <label htmlFor="presential">Presencial</label>
              <input type="checkbox" id="distance" />
              <label htmlFor="distance">A distância</label>
            </div>
          </div>

          <div className="modal-results-container">
            <div className="modal-results-header">
              <h4>Resultado:</h4>
              <label>Ordenar por</label>
              <select name="orderBy" id="order-by">
                <option value="collegeName">Nome da faculdade</option>
                <option value="lowerPrice">Menor preço</option>
                <option value="higherPrice">Maior preço</option>
                <option value="rating">Avaliação</option>
              </select>
            </div>
            <div className="modal-results">
              <ModalResult />
            </div>
          </div>
        </div>
      </div>

      <div className="modal-bg-overlay"></div>
    </div>
  );
};

export default ModalAddFavorites;
