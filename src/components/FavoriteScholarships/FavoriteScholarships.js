import React, { useState, useEffect } from "react";

import "./FavoriteScholarships.css";

// components
import AddCourse from "./AddCourse/Addcourse";
import UserFavorite from "./UserFavorite/UserFavorite";
import ModalAddFavorites from "./ModalAddFavorites/ModalAddFavorites";

const FavoriteScholarships = () => {
  const [showModal, setShowModal] = useState(false);
  const [userFavorites, setUserFavorites] = useState([]);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [allSemesters, setAllSemesters] = useState([]);

  useEffect(() => {
    setFilteredFavorites([...userFavorites]);
    setAllSemesters(
      [...new Set(userFavorites.map(fav => fav.enrollment_semester))].sort(
        (a, b) => a - b
      )
    );
  }, [userFavorites]);

  const deleteFavorite = courseToDelete => {
    setUserFavorites(
      [...userFavorites].filter(
        course => JSON.stringify(course) !== courseToDelete
      )
    );
  };

  const filterFavorites = semester => {
    if (semester === "allSemesters") {
      setFilteredFavorites([...userFavorites]);
    } else {
      setFilteredFavorites(userFavorites.filter(fav => fav.enrollment_semester === semester))
    }
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
      <ul className="semester-filter">
        <li>
          <input
            type="radio"
            id="allSemesters"
            name="semesters"
            value="allSemesters"
            checked={filteredFavorites.length === userFavorites.length}
            onChange={(e) => filterFavorites(e.target.value)}
          />
          <label htmlFor="allSemesters">Todos os semestres</label>
        </li>
        {allSemesters.map(semester => {
          const semesterArr = semester.split(".");
          return (
            <li>
              <input
                type="radio"
                id={semester}
                name="semesters"
                value={semester}
                onChange={(e) => filterFavorites(e.target.value)}
              />
              <label htmlFor={semester}>
                {semesterArr[1]}º semestre de {semesterArr[0]}
              </label>
            </li>
          );
        })}
      </ul>
      <ul>
        <AddCourse setShowModal={setShowModal} />
        {filteredFavorites.map(fav => {
          return (
            <UserFavorite
              key={JSON.stringify(fav)}
              favorite={fav}
              deleteFavorite={deleteFavorite}
            />
          );
        })}
      </ul>
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
