import React from 'react';

const ModalResult = ({course}) => {
  const priceWithDiscount = course.price_with_discount
  const priceBrazilianFormat = priceWithDiscount.toLocaleString('pt-BR',{minimumFractionDigits: 2});
  return (
    <div className="modal-course-list-item">
      <input type="checkbox" />
      <img width="100px" src={course.university.logo_url} alt={course.university.name} />
      <p>{course.course.name}</p>
      <p>{course.course.level}</p>
      <p>Bolsa de <span>{Math.round(course.discount_percentage)}%</span></p>
      <p>R$ {priceBrazilianFormat}/mês</p>
      <p>{course.university.score}</p>
    </div>
  );
}
 
export default ModalResult;