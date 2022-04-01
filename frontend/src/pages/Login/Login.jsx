import React from 'react';
import './Login.css'
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup'; 
import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate();

    let dados = localStorage.getItem('registros');
    
    
    function handleSubmit (values) {
        
        const dadoJson = JSON.parse(dados)


        console.log(dadoJson);
        dadoJson.forEach( (dado)=>{
            console.log(dado.nome);
            if(dado.email == values.email && dado.password == values.password ){
                console.log('deu certin')
                navigate('../dashbord', { replace: true })
                
             //   window.location.href = 'http://localhost:3000/dashbord';

                
            }else{
                console.log('deu ruim ')
            }
        }

        )
        
   

    }
    
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })


    return(
        <div className="login-tela">
            <h1>Login</h1>
            <h1>Entre com seus dados para continuar</h1>
            <Formik 
                initialValues={{}} 
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="login">
                    <div className="login-group">
                        Email
                        <Field 
                            name="email"
                            className="login-field"
                         />
                        <ErrorMessage 
                            component="span" 
                            name="email" 
                            className="login-error"
                        />
                    </div>
                    <div className="login-group">
                        Senha
                        <Field 
                            type="password"
                            name="password"
                            className="login-field"
                         />
                        <ErrorMessage 
                            component="span" 
                            name="password" 
                            className="login-error"
                        />
                    </div>
                    <button 
                    className="login-btn" 
                    type="submit" 
                    >
                    Login</button>


                   
                </Form>
            </Formik>
        </div>
    )
}

export default Login;


