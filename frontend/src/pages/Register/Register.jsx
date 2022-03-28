import React from "react";
import './Register.css'
import { ErrorMessage, Formik, Form, Field } from 'formik';
// import HandleSubmit from "../../components/RegisterController/Register";


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
                >Registar
                </button>
            </Form>
        </Formik>
    </div>
    )
}

export default Register;