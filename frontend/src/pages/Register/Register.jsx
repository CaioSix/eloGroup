import React from "react";
import './Register.css'
import FormRegister from "../../components/FormRegister";

const Register = () => {
    return(
        <div className="register-tela">
        <h1>Cadastre-se</h1>
        <h1>Entre com seus dados:</h1>
            <FormRegister />
    </div>
    )
}

export default Register;