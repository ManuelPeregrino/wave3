// eslint-disable-next-line no-unused-vars
import React from 'react';
import Text from '../../atoms/Text/Text';  // Adjust the import path according to your project structure
import Input from '../../atoms/Input/Input';  // Adjust the import path according to your project structure

// eslint-disable-next-line react/prop-types
const InputField = ({ label, inputType = 'text', placeholder, value, onChange, className = '', textClassName = '', inputClassName = '', ...props }) => {
    return (
        <div className={`form-field ${className}`} {...props}>
            <Text type="label" className={`form-label ${textClassName}`}>{label}</Text>
            <Input type={inputType} placeholder={placeholder} value={value} onChange={onChange} className={`form-input ${inputClassName}`} />
        </div>
    );
};

export default InputField;
