import React from 'react';
import './Login.css'
import FormLogin from '../../components/FormLogin'

const Login = () => {
    return(
        <div className="login-tela">
            <h1>Login</h1>
            <h1>Entre com seus dados para continuar</h1>
                <FormLogin />
        </div>
    )
}

export default Login;


