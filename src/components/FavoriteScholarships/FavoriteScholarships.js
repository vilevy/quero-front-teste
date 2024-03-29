import React, { useState, useEffect } from "react";

// components
import AddCourse from "./AddCourse/Addcourse";
import UserFavorite from "./UserFavorite/UserFavorite";
import ModalAddFavorites from "./ModalAddFavorites/ModalAddFavorites";

const FavoriteScholarships = () => {
  const [showModal, setShowModal] = useState(false);
  const [userFavorites, setUserFavorites] = useState([]);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [filterBy, setFilterBy] = useState([]);
  const [allSemesters, setAllSemesters] = useState([]);

  useEffect(() => {
    const actualSemester = Math.ceil((new Date().getMonth() + 1) / 6);
    const actualYear = new Date().getFullYear();
    const secondFilterSemester = actualSemester === 1 ? 2 : 1;
    const secondFilterYear = actualSemester === 1 ? actualYear : actualYear + 1;
    setAllSemesters([
      `${actualYear}.${actualSemester}`,
      `${secondFilterYear}.${secondFilterSemester}`
    ]);
    const favs = JSON.parse(localStorage.getItem("@quero-bolsa/userFavorites"));
    if (favs !== null) setUserFavorites([...favs]);
  }, []);

  useEffect(() => {
    setFilterBy("allSemesters");
  }, [userFavorites]);

  useEffect(() => {
    if (filterBy === "allSemesters") {
      setFilteredFavorites([...userFavorites]);
    } else {
      setFilteredFavorites(
        userFavorites.filter(fav => fav.enrollment_semester === filterBy)
      );
    }
  }, [filterBy, userFavorites]);

  const deleteFavorite = courseToDelete => {
    setUserFavorites(
      [...userFavorites].filter(course => course.id !== courseToDelete)
    );
    localStorage.setItem(
      "@quero-bolsa/userFavorites",
      JSON.stringify(
        [...userFavorites].filter(course => course.id !== courseToDelete)
      )
    );
  };

  const handleAddToUser = arr => {
    setUserFavorites([...userFavorites, ...arr]);
    localStorage.setItem(
      "@quero-bolsa/userFavorites",
      JSON.stringify([...userFavorites, ...arr])
    );
    setFilterBy("allSemesters");
  };

  return (
    <main>
      <h1>Bolsas favoritas</h1>
      <p className="page-description-text">
        Adicione os cursos e faculdades do seu interesse e receba atualizações
        com as melhores ofertas disponíveis.
      </p>
      <ul className="semester-filter">
        <li key="all" className={filterBy === "allSemesters" ? "active" : null}>
          <input
            type="radio"
            id="allSemesters"
            name="semesters"
            value="allSemesters"
            checked={filterBy === "allSemesters"}
            onChange={e => setFilterBy(e.target.value)}
          />
          <label htmlFor="allSemesters">Todos os semestres</label>
        </li>
        {allSemesters.map((semester, idx) => {
          const semesterArr = semester.split(".");
          return (
            <li
              key={allSemesters[idx]}
              className={filterBy === semester ? "active" : null}
            >
              <input
                type="radio"
                id={semester}
                name="semesters"
                value={semester}
                checked={filterBy === semester}
                onChange={e => setFilterBy(e.target.value)}
              />
              <label htmlFor={semester}>
                {semesterArr[1]}º semestre de {semesterArr[0]}
              </label>
            </li>
          );
        })}
      </ul>
      <div
        className="favorite-page-main-content"
        id={filteredFavorites.length === 0 ? "add-card-solo" : null}
      >
        <AddCourse setShowModal={setShowModal} />
        {filteredFavorites.map(fav => {
          return (
            <UserFavorite
              key={fav.id}
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
