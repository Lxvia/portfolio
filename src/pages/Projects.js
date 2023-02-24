import React from "react";
import projects from '../../src/data/projects.js'

const Projects = () => {

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
