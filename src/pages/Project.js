import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../src/data/projects";
import ButtonBack from "../components/ButtonBack";

const Project = () => {
  const { projectSlug } = useParams();

  const findProject = projects.find((project) => project.slug === projectSlug);

  return (
    <div className="project">
      <ButtonBack />
      <div className="text-container">
        <div className="title-container">
          <h1>{findProject.title}</h1>
          <p>{findProject.status}</p>
        </div>
        <p>{findProject.description}</p>
      </div>
      <img src={findProject.photo} alt="" />
    </div>
  );
};

export default Project;
