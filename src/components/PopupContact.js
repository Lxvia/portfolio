import React from "react";
import logoMalt from "../assets/images/malt.png";
import logoLinkedin from "../assets/images/linkedin.png";
import logoGithub from "../assets/images/github.png";

const Popup = () => {
  return (
    <div className="popup">
      <h1>Contact</h1>
      <div className="btns">
      <a href="mailto:oliviarudolf67@gmail.com" className="button">M'envoyer un email</a>
      <a href="tel:0610157110" className="button">Me contacter par téléphone</a>
      </div>
      <div className="logos">
        <a href="https://www.malt.fr/profile/oliviarudolf" target="_blank" rel="noreferrer"><img src={logoMalt} alt="logo du site Malt" /></a>
        <a href="https://github.com/Lxvia" target="_blank" rel="noreferrer"><img src={logoGithub} alt="logo du site Github" /></a>
        <a href="https://www.linkedin.com/in/olivia-rudolf-938439201/" target="_blank" rel="noreferrer"><img src={logoLinkedin} alt="logo du site Linkedin" /></a>
      </div>
    </div>
  );
};

export default Popup;
