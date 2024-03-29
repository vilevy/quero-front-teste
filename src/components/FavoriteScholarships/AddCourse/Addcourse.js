import React from "react";

const AddCourse = ({ setShowModal }) => {
  return (
    <div className="add-favorite-card" onClick={() => setShowModal(true)}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="plus"
        className="svg-inline--fa fa-plus fa-w-14 add-favorite-icon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
        ></path>
      </svg>
      <h3>Adicionar bolsa</h3>
      <p>Clique para adicionar bolsas de cursos do seu interesse</p>
    </div>
  );
};

export default AddCourse;
