import React from "react";
import { Link } from "react-router-dom";
import projects from "../../src/data/projects"


const Projects = () => {

  return (
    <div className="projects">
      <h1>Mes projets</h1>
      <div className="gallery">
        {[...projects].reverse().map((project, i) => (
          <Link to={project.slug} className="project-img" key={i}>
            <img src={project.photo} alt={project.title} />
            <p>Voir plus</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
