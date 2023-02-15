import React from "react";
import Timeline from "../components/Timeline";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <h1>
          Du <span>design au code</span> pour vous accompagner dans la création
          de votre site web.
        </h1>
        <p>
          Suite à l’obtention de mon diplôme en Webdesign, j’ai souhaité élargir
          mes compétences en apprenant à coder. Je me rends vite compte que j’ai
          trouvé ma voie et décroche mon deuxième diplôme, cette fois-ci en
          Développement web.
          <br />
          <br /> C’est grâce à ma polyvalence que je peux aujourd'hui vous
          proposer un accompagnement complet, allant du design au développement
          lors de la création de votre projet.
        </p>
      </div>

      <Timeline />
    </div>
  );
};

export default About;
