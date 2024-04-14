// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Button.css";

// eslint-disable-next-line react/prop-types
function Button({children, onClick, type = 'button', className = '', ...props }) {
    return (
        <button type={type} className={`button ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;
