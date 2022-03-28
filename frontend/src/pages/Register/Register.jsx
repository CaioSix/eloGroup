import React from "react";
import './Register.css'
import { ErrorMessage, Formik, Form, Field } from 'formik';

const Register = () => {
    const handleSubmit = values => console.log(values)
    return(
        <div className="register-tela">
        <h1>Cadastre-se</h1>
        <h1>Entre com seus dados:</h1>
        <Formik 
            initialValues={{}} 
            onSubmit={handleSubmit}
            
        >
            <Form className="register">
                <div className="register-group">
                    Nome
                    <Field 
                        name="nome"
                        className="register-field"
                     />
                    <ErrorMessage 
                        component="span" 
                        name="nome" 
                        className="register-error"
                    />
                </div>
                <div className="register-group">
                    email
                    <Field 
                        name="email"
                        className="register-field"
                     />
                    <ErrorMessage 
                        component="span" 
                        name="email" 
                        className="register-error"
                    />
                </div>
                <div className="register-group">
                    Senha
                    <Field 
                        name="password"
                        className="register-field"
                     />
                    <ErrorMessage 
                        component="span" 
                        name="password" 
                        className="register-error"
                    />
                </div>
                <div className="register-group">
                    Repita a Senha
                    <Field 
                        name="password"
                        className="register-field"
                     />
                    <ErrorMessage 
                        component="span" 
                        name="password" 
                        className="register-error"
                    />
                </div>
                <button 
                    className="register-btn" 
                    type="submit" 
                >Login
                </button>
            </Form>
        </Formik>
    </div>
    )
}

export default Register;