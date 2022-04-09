import React from 'react';
import { ErrorMessage, Form, Field } from 'formik';
import { Formik } from 'formik';
import * as yup from 'yup';

const FormRegister = () =>{
    function handleSubmit(values) {
        let registros = [];
        let storagedRegistros = localStorage.getItem("registros");
        if (storagedRegistros) {
            registros = JSON.parse(storagedRegistros);
          }
          registros.push(values);
          localStorage.setItem("registros", JSON.stringify(registros));
          alert('usuario foi criado');
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required().matches(/^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*$/)
    })

    return(
        <>
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
        </>

    )
}

export default FormRegister 