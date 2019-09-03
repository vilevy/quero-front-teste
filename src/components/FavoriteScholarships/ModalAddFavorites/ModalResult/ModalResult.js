import React from "react";

const ModalResult = ({ course, handleAddToSelected }) => {
  const priceWithDiscount = course.price_with_discount;
  const priceBrazilianFormat = priceWithDiscount.toLocaleString("pt-BR", {
    minimumFractionDigits: 2
  });
  return (
    <div className="modal-course-list-item">
      <input
        id={JSON.stringify(course)}
        type="checkbox"
        value={JSON.stringify(course)}
        onClick={e => handleAddToSelected(e)}
      />
      <label className="image-container" htmlFor={JSON.stringify(course)}>
        <img src={course.university.logo_url} alt={course.university.name} />
      </label>
      <div className="modal-course-info">
        <div className="modal-course-info-top">
          <p className="modal-course-name">{course.course.name}</p>
          <p className="modal-course-level">{course.course.level}</p>
        </div>
        <div className="modal-course-info-bottom">
          <p>
            Bolsa de{" "}
            <span className="gree-text">
              {Math.round(course.discount_percentage)}%
            </span>
          </p>
          <p className="gree-text">R$ {priceBrazilianFormat}/mês</p>
        </div>
      </div>
      <label
        htmlFor={JSON.stringify(course)}
        className="custom-checkbox"
      ></label>
    </div>
  );
};

export default ModalResult;
