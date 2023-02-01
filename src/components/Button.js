import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({path, type, variant, onClick, children}) => {
    return (
        <Link to={path} className='button'>
            <button type={type ? type : "button"} variant={variant} onClick={onClick}>{children}</button>
        </Link>
    );
};

export default Button;