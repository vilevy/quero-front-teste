import React from "react";

const UserFavorite = ({ favorite, deleteFavorite }) => {
  return (
    <div className="favorite-card">
      <img src={favorite.university.logo_url} alt={favorite.university.name} />
      <h5 className="upper-bold">{favorite.university.name}</h5>
      <h6>{favorite.course.name}</h6>
      <span className="rating-text">{favorite.university.score}</span>
      {/* <i>ESTRELAS</i> */}
      <div className="favorite-card-course-info-center">
        <p className="upper-bold">
          {favorite.course.kind} - {favorite.course.shift}
        </p>
        <p className="favorite-start-date">Início das aulas em: {favorite.start_date}</p>
      </div>
      <p className="favorite-price-title">Mensalidade com o Quero Bolsa:</p>
      <p className="favorite-full-price">R${favorite.full_price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2
  })}</p>
      <p className="favorite-discounted-price"><span className="green-bold">R$ {favorite.price_with_discount}</span>/mês</p>
      <div className="favorite-card-buttons">
        <button
          value={JSON.stringify(favorite)}
          onClick={e => deleteFavorite(e.target.value)}
          className="modal-cancel-btn"
        >
          Excluir
        </button>
        {favorite.enabled ? (
          <button className="modal-add-btn">Ver oferta</button>
        ) : (
          <button className="modal-add-btn" disabled>Indisponível</button>
        )}
      </div>
    </div>
  );
};

export default UserFavorite;
