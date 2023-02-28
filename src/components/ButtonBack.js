import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa"

const ButtonBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="btn-back">
      <button onClick={goBack}>
        <FaChevronLeft />
        Retour
      </button>
    </div>
  );
};

export default ButtonBack;
