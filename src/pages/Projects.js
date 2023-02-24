import React from "react";
import { Link } from "react-router-dom";
import projects from "../../src/data/projects.js";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Mes projets</h1>
      <p>(Détails à venir)</p>
      <Link to="/project">lien</Link>
      <div className="gallery">
        {[...projects].reverse().map((el, i) => (
          <Link to={el.slug} className="project-img" key={i}>
            <img src={el.photo} alt={el.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
