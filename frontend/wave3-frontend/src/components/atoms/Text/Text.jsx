import React from 'react';

// eslint-disable-next-line react/prop-types
const Text = ({ type = 'p', children, className = '', ...props }) => {
    const Component = type;  // Dynamic tag type, e.g., 'h1', 'p', 'span'
    return (
        <Component className={`text ${className}`} {...props}>
            {children}
        </Component>
    );
};

export default Text;
