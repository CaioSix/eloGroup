import React, { useState } from "react";
import Logo from "../../assets/log-escrito.jpg"
import ItemTabela from "../../components/ModelDarshboard/index"
import Modal from '../../components/AddLead/AddLead'


const Dashbord = () =>{
    const [modal, setModal] = useState(false)
    
    const [empresas, setEmpresas] = useState([ 
        { nome : 'Bauduco'},
        { nome : 'Bradesco'},
        { nome : 'Itau'},
    ])

    const empresasNovas = JSON.parse(localStorage.getItem('novaEmpresa'));
    // setEmpresas(empresasNovas)
    empresas.push(empresasNovas)
    // console.log(empresasNovas)

    return(
      <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={Logo} alt="" width="" height="65" />
                </div>
                <div className="col">
                    Painel de leads
                </div>
                </div>
                <button 
                type="button" 
                onClick={() => setModal(true)}
                className="btn btn-info"
                >Novo Lead (+)</button>
                 {modal ? 
                 <Modal onClose={ () => setModal(false)}>
                         </Modal> 
                     : null }
           
        </div>
        <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Cliente em Potencial</th>
                        <th scope="col">Dados Confirmados</th>
                        <th scope="col">Reunião Agendada</th>
                        <th scope="col" className="text-right" >Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empresas.map( emp => (<ItemTabela emp={emp} />))}
                        
                    </tbody>
                    </table>
                 
                  
      </>
)}

export default Dashbord