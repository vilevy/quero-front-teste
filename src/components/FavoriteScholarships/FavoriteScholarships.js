import React, { useState } from "react";

import "./FavoriteScholarships.css";

// components
import AddCourse from "./AddCourse/Addcourse";
import UserFavorite from "./UserFavorite/UserFavorite";
import ModalAddFavorites from "./ModalAddFavorites/ModalAddFavorites";

const FavoriteScholarships = () => {
  const [showModal, setShowModal] = useState(false);
  const [userFavorites, setUserFavorites] = useState([]);
  const [filteredFavorites, setfilteredFavorites] = useState(userFavorites);

  const deleteFavorite = courseToDelete => {
    setUserFavorites(
      [...userFavorites].filter(
        course => JSON.stringify(course) !== courseToDelete
      )
    );
  };

  const filterFavorites = semester => {
    
  };

  const handleAddToUser = arr => {
    setUserFavorites([...userFavorites, ...arr]);
  };

  return (
    <main>
      <h1>Bolsas favoritas</h1>
      <p>
        Adicione os cursos e faculdades de seu interesse e receba atualizações
        com as melhores ofertas.
      </p>
      <div className="semester-filter">
        <span>Todos os semestres</span>
        <span>2º semestre de 2019</span>
        <span>1º semestre de 2020</span>
      </div>
      <div>
        <AddCourse setShowModal={setShowModal} />
        {userFavorites.map(fav => {
          return (
            <UserFavorite
              key={JSON.stringify(fav)}
              favorite={fav}
              deleteFavorite={deleteFavorite}
            />
          );
        })}
      </div>
      {showModal && (
        <ModalAddFavorites
          setShowModal={setShowModal}
          userFavorites={userFavorites}
          handleAddToUser={handleAddToUser}
        />
      )}
    </main>
  );
};

export default FavoriteScholarships;
