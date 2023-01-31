import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>olivia.</h1>
            <div className='navlinks'>
                <NavLink className="navlink" to="/">accueil</NavLink>
                <NavLink className="navlink" to="/about">à propos</NavLink>
                <NavLink className="navlink" to="/projects">projets</NavLink>
            </div>
            <p>toggle btn</p>
        </div>
    );
};

export default Navbar;