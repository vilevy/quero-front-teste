import React, { useState, useEffect } from "react";

// components
import ModalResult from "./ModalResult/ModalResult";

// services
import ScholarshipServices from "../../../services/ScholarshipServices";

const ModalAddFavorites = ({ showModal, setShowModal }) => {
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [modality, setModality] = useState(["presential", "distance"]);
  const [price, setPrice] = useState(10000);
  const [orderBy, setOrderBy] = useState("universityName");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [allCoursesName, setAllCoursesName] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      const response = await ScholarshipServices.get();
      setAllCourses(response.data);
      setFilteredCourses(response.data.sort((a, b) => a.university.name > b.university.name ? 1 : -1));
      setAllCoursesName([...new Set(response.data.map(course => course.course.name))].sort());
      setAllCities([...new Set(response.data.map(course => course.campus.city))].sort());
      setLoading(false);
      return response.data;
    };
    getCourses();
  }, []);

  const filterOrder = (by) => {
    switch(by) {
      case 'universityName':
        setFilteredCourses([...filteredCourses].sort((a, b) => a.university.name > b.university.name ? 1 : -1));
        break;
      case 'lowerPrice':
        setFilteredCourses([...filteredCourses].sort((a, b) => a.price_with_discount > b.price_with_discount ? 1 : -1));
        break;
      case 'higherPrice':
        setFilteredCourses([...filteredCourses].sort((a, b) => a.price_with_discount < b.price_with_discount ? 1 : -1));
        break;
      case 'rating':
        setFilteredCourses([...filteredCourses].sort((a, b) => a.university.rating > b.university.rating ? 1 : -1));
        break;
      default:
        break;
      }
  }

  console.log(filteredCourses);

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
                {allCoursesName.map((course, idx) => {
                  return <option key={idx}>{course}</option>;
                })}
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
              <select name="orderBy" id="order-by" onChange={(e) => filterOrder(e.target.value)}>
                <option value="universityName">Nome da faculdade</option>
                <option value="lowerPrice">Menor preço</option>
                <option value="higherPrice">Maior preço</option>
                <option value="rating">Avaliação</option>
              </select>
            </div>
            <div className="modal-results">
              {loading ? (
                <h1 style={{ color: "green" }}>LOADING</h1>
              ) : (
                filteredCourses.map((course, idx) => {
                  return <ModalResult key={idx} course={course} />;
                })
              )}
            </div>
          </div>

          <div className="modal-btns">
            <button>Cancelar</button>
            <button disabled={!selectedCourses.length}>
              Adicionar bolsa(s)
            </button>
          </div>
        </div>
      </div>

      <div className="modal-bg-overlay"></div>
    </div>
  );
};

export default ModalAddFavorites;
