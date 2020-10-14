import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        console.log('Entrando');
        navigate('/')
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleClick}>entrar</button>
        </div>
    )
}

export default Login
