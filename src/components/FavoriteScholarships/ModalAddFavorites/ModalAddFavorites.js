import React, { useState, useEffect } from "react";

// components
import ModalResult from "./ModalResult/ModalResult";

// services
import ScholarshipServices from "../../../services/ScholarshipServices";

const ModalAddFavorites = ({
  setShowModal,
  handleAddToUser,
  userFavorites
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [modality, setModality] = useState(["presential", "distance"]);
  const [price, setPrice] = useState(10000);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [allCoursesName, setAllCoursesName] = useState([]);
  const [loading, setLoading] = useState(true);

  // get data from api
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await ScholarshipServices.get();
        setAllCourses(response.data);
        setFilteredCourses(
          response.data.sort((a, b) =>
            a.university.name > b.university.name ? 1 : -1
          )
        );
        setAllCoursesName(
          [...new Set(response.data.map(course => course.course.name))].sort()
        );
        setAllCities(
          [...new Set(response.data.map(course => course.campus.city))].sort()
        );
        setLoading(false);
        return response.data;
      } catch (err) {
        setLoading(false);
        setErrorMessage(err);
      }
    };
    getCourses();
    window.addEventListener(
      "keydown",
      e => {
        if (e.keyCode === 27) setShowModal(false);
      },
      false
    );

    return () => {
      window.removeEventListener(
        "keydown",
        e => {
          if (e.keyCode === 27) setShowModal(false);
        },

      );
    };
  }, []);

  // filter when any filter property update
  useEffect(() => {
    setFilteredCourses(
      [...allCourses].filter(theCourse => {
        let courseName = course !== "" ? theCourse.course.name : course;

        let mod = "";
        if (theCourse.course.kind === "EaD") {
          mod = "distance";
        } else if (theCourse.course.kind === "Presencial") {
          mod = "presential";
        }

        return (
          !userFavorites.some(userFav => {
            return JSON.stringify(userFav) === JSON.stringify(theCourse);
          }) &&
          courseName === course &&
          theCourse.price_with_discount <= price &&
          (modality.includes(mod) || modality.length === 0) &&
          theCourse.campus.city.toLowerCase().includes(city.toLowerCase())
        );
      })
    );
  }, [city, course, modality, price, allCourses, userFavorites]);

  const filterOrder = by => {
    switch (by) {
      case "universityName":
        setFilteredCourses(
          [...filteredCourses].sort((a, b) =>
            a.university.name > b.university.name ? 1 : -1
          )
        );
        break;
      case "lowerPrice":
        setFilteredCourses(
          [...filteredCourses].sort((a, b) =>
            a.price_with_discount > b.price_with_discount ? 1 : -1
          )
        );
        break;
      case "higherPrice":
        setFilteredCourses(
          [...filteredCourses].sort((a, b) =>
            a.price_with_discount < b.price_with_discount ? 1 : -1
          )
        );
        break;
      case "rating":
        setFilteredCourses(
          [...filteredCourses].sort((a, b) =>
            a.university.score < b.university.score ? 1 : -1
          )
        );
        break;
      default:
        break;
    }
  };

  const handleModality = e => {
    const { checked, id } = e.target;
    let newModality = [...modality];
    if (checked) {
      newModality.push(id);
      setModality(newModality);
    } else {
      const idx = newModality.indexOf(id);
      newModality.splice(idx, 1);
      setModality(newModality);
    }
  };

  const sliderSteps =
    price >= 2000 ? 500 : price >= 1000 ? 100 : price >= 300 ? 50 : 25;

  const handleAddToSelected = e => {
    const { value } = e.target;
    if (e.target.checked) {
      setSelectedCourses([...selectedCourses, JSON.parse(value)]);
    } else {
      setSelectedCourses(
        [...selectedCourses].filter(
          thisCourse => JSON.stringify(thisCourse) !== value
        )
      );
    }
  };

  const handleAddToUserAndSetSelected = arr => {
    handleAddToUser(arr);
    setSelectedCourses([]);
  };

  return (
    <div className="modal">
      <span
        className="modal-close-btn"
        onClick={() => setShowModal(false)}
      ></span>

      <div className="modal-container">
        <header>
          <h2>Adicionar bolsa</h2>
          <p>Filtre e adicione as bolsas de seu interesse.</p>
        </header>
        <div className="modal-main-content">
          <div className="modal-filters-container">
            <div className="modal-filter">
              <label>Selecione sua cidade</label>
              <input
                id="city-input"
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              {city.length > 0 && (
                <ul>
                  {allCities
                    .filter(
                      theCity =>
                        theCity.toLowerCase().includes(city.toLowerCase()) &&
                        theCity !== city
                    )
                    .map(theCity => (
                      <li key={theCity} onClick={() => setCity(theCity)}>
                        {theCity}
                      </li>
                    ))}
                </ul>
              )}
            </div>
            <div className="modal-filter">
              <label>Selecione o curso de sua preferência</label>
              <div className="custom-select">
                <select
                  name="course"
                  id="course-select"
                  onChange={e => setCourse(e.target.value)}
                >
                  <option default></option>
                  {allCoursesName.map((course, idx) => {
                    return (
                      <option className="teste" key={idx}>
                        {course}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="modal-filter">
              <label>Como você quer estudar?</label>
              <div className="course-kind-container">
                <label className="course-kind-option">
                  Presencial
                  <input
                    type="checkbox"
                    id="presential"
                    name="modality"
                    checked={modality.includes("presential")}
                    onChange={e => handleModality(e)}
                  />
                  <span className="custom-checkbox"></span>
                </label>
                <label className="course-kind-option">
                  A distância
                  <input
                    type="checkbox"
                    id="distance"
                    name="modality"
                    checked={modality.includes("distance")}
                    onChange={e => handleModality(e)}
                  />
                  <span className="custom-checkbox"></span>
                </label>
              </div>
            </div>
            <div className="modal-filter" id="price-filter">
              <label>Até quanto pode pagar?</label>
              <span>R${parseInt(price).toLocaleString("pt-BR")}</span>
              <input
                type="range"
                className="price-slider"
                min="0"
                max="10000"
                value={price}
                step={sliderSteps}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="modal-results-container">
            <div className="modal-results-header">
              <div className="modal-results-header-title">
                <span>Resultado:</span>
                <span>Ordenar por</span>
              </div>
              <div className="custom-select">
                <select
                  name="orderBy"
                  id="order-by"
                  onChange={e => filterOrder(e.target.value)}
                >
                  <option value="universityName">Nome da faculdade</option>
                  <option value="lowerPrice">Menor preço</option>
                  <option value="higherPrice">Maior preço</option>
                  <option value="rating">Avaliação</option>
                </select>
              </div>
            </div>
            <div className="modal-results">
              {loading ? (
                <span className="modal-api-loading"></span>
              ) : errorMessage ? (
                <p>
                  <strong>
                    Ocorreu um erro ao tentar carregar os cursos. Por favor,
                    tente novamente.
                  </strong>
                </p>
              ) : filteredCourses.length === 0 ? (
                <p>
                  <strong>
                    Nenhum curso encontrado. Tente alterar os filtros.
                  </strong>
                </p>
              ) : (
                filteredCourses.map((course, idx) => {
                  return (
                    <ModalResult
                      key={JSON.stringify(course)}
                      course={course}
                      selectedCourses={selectedCourses}
                      handleAddToSelected={handleAddToSelected}
                    />
                  );
                })
              )}
            </div>
          </div>

          <div className="modal-btns">
            <button
              className="modal-cancel-btn"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              className="modal-add-btn"
              disabled={!selectedCourses.length}
              onClick={arr => handleAddToUserAndSetSelected(selectedCourses)}
            >
              Adicionar bolsa(s)
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal-bg-overlay"
        onClick={() => setShowModal(false)}
      ></div>
    </div>
  );
};

export default ModalAddFavorites;
