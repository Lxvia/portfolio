import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="btn-back">
      <button onClick={goBack}>
        Retour
        <span className="btn-back-icon"></span>
        <FontAwesomeIcon icon="fa-solid fa-caret-left" />
      </button>
    </div>
  );
};

export default ButtonBack;
