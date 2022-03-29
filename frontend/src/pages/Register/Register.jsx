import React from "react";
import './Register.css'
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';


const Register = () => {
    function handleSubmit(values) {
        console.log(values)
        let registros = [];
        let storagedRegistros = localStorage.getItem("registros");

        if (storagedRegistros) {
            registros = JSON.parse(storagedRegistros);
          }

          registros.push(values);

          localStorage.setItem("registros", JSON.stringify(registros));
          alert('usuario foi criado')
          
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required().matches(/^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*$/)
    })
  
    
    
    return(
        <div className="register-tela">
        <h1>Cadastre-se</h1>
        <h1>Entre com seus dados:</h1>
        <Formik 
            initialValues={{}} 
            onSubmit={handleSubmit}
            validationSchema={validations}
            
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
                        type="email"
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
                        type="password"
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
                        type="password"
                        className="register-field"
                        // pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$])[a-zA-Z0-9@#$]{8,50}$"
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
                >Registar
                </button>
            </Form>
        </Formik>
    </div>
    )
}

export default Register;