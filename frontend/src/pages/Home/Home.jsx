import React, {useState} from 'react'
import './Home.css'

const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-9"><h3>Bem vindo a nosso sistema de Leads</h3></div>
                <div className="col-4">
                    <br/>
                    <h5>Lead, é uma oportunidade de negócio que deu informações de contato, como nome e email, em troca de uma oferta da empresa (como um eBook)</h5>
                    </div>
                <div className="col-6">
                <br/>
                <h4>Uma plataforma de transformação de negócios que integra Tecnologia, Analytics e Gestão para destravar o potencial de pessoas e de organizações. Somos os parceiros da sua jornada de transformação. </h4>
                    <figcaption className="blockquote-footer">
                    <h3>#UnlockYourPotential</h3>
                    </figcaption>
                    
    
                    </div>
            </div>
        
        </div>
  
    )
  
}

export default Home ;





