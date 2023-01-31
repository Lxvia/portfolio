import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>olivia.</h1>
            <div className='navlinks'>
                <NavLink to="/">accueil</NavLink>
                <NavLink to="/about">à propos</NavLink>
                <NavLink to="/projects">projets</NavLink>
            </div>
            <p>toggle btn</p>
        </div>
    );
};

export default Navbar;