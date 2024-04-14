import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../molecules/InputField/InputField'; // Assuming InputField contains Text and Input
import Text from '../atoms/Text/Text';
import Redirection from '../atoms/Redirection/Redirection';
import api from '../../util/wave3api';
import '../../assets/styles/Login.css';

function Login() {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        console.log(email);
        console.log(password);

        const data = {
            email: email, // Usar el estado email actual
            password: password // Usar el estado password actual
        };

        console.log(data)

        try {
            const response = await api.post('/api/users/login', data);
            console.log('Solicitud exitosa:', response.data);
            // Aquí puedes realizar la navegación si el inicio de sesión es exitoso
            navigate('/dashboard');
        } catch (error) {
            alert("Ingrese datos correctos")
        }
    };

    const userLabel = "Email";
    const passLabel = "Password";
    const loginLabel = "Login";

    return (
        <div className='backgroundgeneral'>
            <div className='form-background'>
                <Text>{loginLabel}</Text>
                <div className='form-input'>
                    <Text className='field'>{userLabel}</Text>
                    <InputField  
                        inputType="text" // Usando el tipo de entrada "text" para la validación adecuada
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} // Actualizar el estado del email
                        name="email"
                        className='field'
                    />
                </div>
                <div className='form-input'>
                    <Text className='field'>{passLabel}</Text>
                    <InputField 
                        inputType="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} // Actualizar el estado de la contraseña
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
                            // checked={formData.rememberMe}
                            // onChange={handleChange}
                        />
                        <label htmlFor="remember-me" className='form-remember'>Remember me</label>
                    </div>
                    <Redirection to="/forgot-password" className='form-recover'>Forget Password?</Redirection>
                </div>
                <button onClick={handleSubmit} className='form-submit'>Submit</button>
                <div className='form-footer'>
                    <Text>Don’t have an account? <Redirection to="/signup" className='signup-link'>Sign Up</Redirection></Text>
                </div>
            </div>
        </div>
    );
}

export default Login;
