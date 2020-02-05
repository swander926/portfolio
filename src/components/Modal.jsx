import React from 'react';

const Modal = props => {
  return (
    <>
    <div id={props.data.projId} className="modalTable">
    <div className="modalBody">
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>

    </div>

    </div>
      
    </>
  );
}

export default Modal;
