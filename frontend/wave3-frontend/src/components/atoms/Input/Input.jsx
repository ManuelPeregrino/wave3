import React from 'react';

// eslint-disable-next-line react/prop-types
const Input = ({ type = 'text', placeholder = '', className = '', onChange, value, ...props }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`input ${className}`}
            onChange={onChange}
            value={value}
            {...props}
        />
    );
};

export default Input;
