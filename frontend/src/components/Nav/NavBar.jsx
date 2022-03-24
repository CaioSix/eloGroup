import React from 'react';
import Logo from './../../assets/Logo.gif';
import { BrowserRouter as Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">          
          <a class="navbar-brand" href="/">
                <img src={Logo} alt="" width="30" height="24" />
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="nav justify-content-center">
              
                <li className="nav-item">
                <a className="nav-link" href="/newuser">Cadastre-se</a>
  
                </li>
                <li className="nav-item"> 
                    <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Sobre</a>
                </li>
            </ul>
                    
          </div>
        </div>
      </nav>
    )
}

export default Navbar;