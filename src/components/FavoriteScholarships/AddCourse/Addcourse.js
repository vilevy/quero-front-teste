import React from 'react';

const AddCourse = ({setShowModal}) => {
  return (
    <div className="addCourse-card" onClick={() => setShowModal(true)} >
      <i>ÍCONE ADD</i>
      <h3>Adicionar curso</h3>
      <p>Clique para adicionar bolsas de cursos do seu interesse</p>
    </div>
  );
}
 
export default AddCourse;