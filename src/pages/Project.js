import React from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
    const { projectSlug } = useParams();
    
    return (
        <div>
            <h1>Mon projet</h1>
        </div>
    );
};

export default Project;