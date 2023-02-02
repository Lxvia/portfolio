import React from "react";
import Timeline from "../components/Timeline";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1>
          Du design au code pour vous accompagner dans la
          <br /> création de votre site web.
        </h1>
        <p>
          Suite à l’obtention de mon diplôme en Webdesign, j’ai souhaité élargir
          mes
          <br /> compétences en apprenant à coder. Je me rend vite compte que
          j’ai trouvé ma voie et
          <br /> décroche mon deuxième diplôme, cette fois-ci en Développement
          web.
          <br />
          <br /> C’est grâce à ma polyvalence que je peux aujourd'hui vous
          proposer un accompagnement
          <br /> complet, allant du design au développement lors de la création
          de votre projet.
        </p>
      </div>

      <Timeline />
    </div>
  );
};

export default About;
