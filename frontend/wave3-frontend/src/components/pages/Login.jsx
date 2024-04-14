// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import InputField from '../molecules/InputField/InputField'; // Assuming InputField contains Text and Input
import Text from '../atoms/Text/Text';
import Link from '../atoms/Redirection/Redirection'; // Make sure to create this atom if it doesn't exist yet
import '../../assets/styles/Login.css';
import Redirection from '../atoms/Redirection/Redirection';


function Login() {
    
    // form data state
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });
    
    // handle form field changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };
    
    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };
    
    const userlabel = "Email"
    const passlabel = "Password"
    const loginlabel = "Login"
    return (
        <div className='backgroundgeneral'>
            <form className='form-background' onSubmit={handleSubmit}>
            <Text>{loginlabel}</Text>
                <div className='form-input'>
                <Text className='field'>{userlabel}</Text>
                <InputField  
                    inputType="email" // Using email type for proper validation
                    placeholder="Enter your email" 
                    value={formData.username} 
                    onChange={handleChange} 
                    name="username"
                    className='field'
                />
                </div>
                <div className='form-input'>
                <Text className='field'>{passlabel}</Text>
                <InputField 
                    inputType="password" 
                    placeholder="Enter your password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    name="password"
                    className='field'
                />
                </div>
                <div className='form-checkbox'>
                    <div>
                    <input 
                        type="checkbox" 
                        id="remember-me" 
                        name="rememberMe"
                        checked={formData.rememberMe} 
                        onChange={handleChange}
                    />
                    <label htmlFor="remember-me" className='form-remember'>Remember me</label>
                    </div>
                    <Redirection to="/forgot-password" className='form-recover'>Forget Password?</Redirection>
                </div>
                <button type="submit" className='form-submit'>Submit</button>
                <div className='form-footer'>
                    <Text>Don’t have an account? <Link to="/signup" className='signup-link'>Sign Up</Link></Text>
                </div>
            </form>
        </div>
    );
}

export default Login;
