import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../src/data/projects";

const Project = () => {
  const { projectSlug } = useParams();

  const findProject = projects.find((project) => project.slug === projectSlug);

  return (
    <div className="project">
      <div className="container">
        <h1>{findProject.title}</h1>
        <p>{findProject.description}</p>
      </div>
      <img src={findProject.photo} alt="" />
    </div>
  );
};

export default Project;
