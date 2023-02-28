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
      </button>
    </div>
  );
};

export default ButtonBack;
