import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../src/data/projects'

const Project = () => {
    const { projectSlug } = useParams();

    const findProject = projects.find((project) => project.slug === projectSlug)
    
    return (
        <div className='project'>
            <h1>Mon projet est {findProject.title}</h1>
        </div>
    );
};

export default Project;