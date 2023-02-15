import React from "react";
import epidaure from "../assets/images/mockups/mockup_epidaure.png";
import zorya from "../assets/images/mockups/mockup_zorya.png";
import strasdev from "../assets/images/mockups/mockup_strasdev.png";

const Projects = () => {
  const projects = [
    { title: "Epidaure", photo: epidaure },
    { title: "Zorya", photo: zorya },
    { title: "Stras.Dev", photo: strasdev },
  ];

  return (
    <div className="projects">
      <h1>Mes projets</h1>
      <p>(Détails à venir)</p>
      <div className="gallery">
          {[...projects].reverse().map((el, i) => (
              <div className="project-img" key={i}>
                  <img src={el.photo} alt={el.title} />
              </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
