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


                    {/* <button><a target="_blank" href='http://localhost:3000/dashbord'>Click me!</a> </button> */}
                </Form>
            </Formik>
        </div>
    )
}

export default Login;


// function Login(props){
    
//     return (
    
//     <form className="form" onSubmit={props.handleRegister}>
//         <div id="marginTop"className="imgContainer center">
//             <img src="https://elogroup.com.br/wp-content/uploads/2020/09/logo-EloGroup-branco.png" alt="logo da Elogroup"></img>
//         </div>
//         <p className ="inputText textCenter">Username:</p>
//         <input className="center input" type="text" required="required" value = {props.username} onChange={props.setUsername}></input>
//         <p className ="inputText textCenter">Password:</p>
//         <input className="center input" onKeyUp={props.validatePassword} type="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@+#$])[a-zA-Z0-9@+#$]{8,50}$" title="Password deve possuir ao menos 8 caracteres, contendo ao menos, um caracter especial(@+#$), um caracter numérico, um caracter alfanumérico;" required="required" minlength="8" placeholder="********" value = {props.password} onChange={props.setPassword}></input>
//         <p className ="inputText textCenter">Confirmar Password:</p>
//         <input className="center input" onKeyUp={props.validatePassword} id="confirm_password" type="password" required="required" minlength="8" placeholder="********" value = {props.confirmPassword} onChange={props.setConfirmPassword}></input>
//         <br/>
//         <button className="salveLead" type="submit" className="buttonRegister">Confirm</button>
//     </form>
//     )
// }

// export default Login;