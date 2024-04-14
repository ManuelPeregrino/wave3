// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Image = ({ src, alt, className = '', ...props }) => {
    return (
        <img src={src} alt={alt} className={`image ${className}`} {...props} />
    );
};

export default Image;
