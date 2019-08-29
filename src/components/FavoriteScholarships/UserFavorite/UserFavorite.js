import React from "react";

const UserFavorite = ({ favorite, deleteFavorite }) => {
  return (
    <div className="favorite-card">
      <img
        src={favorite.university.logo_url}
        alt={favorite.university.name}
        width="150px"
      />
      <h5>{favorite.university.name}</h5>
      <h6>{favorite.course.name}</h6>
      <span>{favorite.university.score}</span>
      <i>ESTRELAS</i>
      <p>
        {favorite.course.kind} - {favorite.course.shift}
      </p>
      <p>Início das aulas em: {favorite.start_date}</p>
      <p>Mensalidade com o Quero Bolsa:</p>
      <p>{favorite.full_price}</p>
      <p>R$ {favorite.price_with_discount}/mês</p>
      <button
        value={JSON.stringify(favorite)}
        onClick={e => deleteFavorite(e.target.value)}
      >
        Excluir
      </button>
      {favorite.enabled ? <button>Ver oferta</button> : <p>Indisponível</p>}
    </div>
  );
};

export default UserFavorite;
