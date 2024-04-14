import React from 'react';
import "./Redirection.css"
import { Link as RouterLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Redirection = ({ to, children, className = '', ...props }) => {
    return (
        <RouterLink to={to} className={`link ${className}`} {...props}>
            {children}
        </RouterLink>
    );
};

export default Redirection;

