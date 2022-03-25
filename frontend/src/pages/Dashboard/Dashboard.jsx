import React from "react";
import Logo from "../../assets/log-escrito.jpg"
import ItemTabela from "../../components/ModelDarshboard/index"

const Dashbord = () =>{
    const empresas =[
        { nome : 'Telesena'},
        { nome : 'Bradesco'},
        { nome : 'Itau'},
        { nome : 'Unibanco'},
        { nome : 'Faroeste Caboclo'},
        { nome : 'quem me deraiai'},
    ]

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
                <button type="button" className="btn btn-info">Novo Lead (+)</button>
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
                        {empresas.map( filme => (<ItemTabela filme={filme} />))}
                    </tbody>
                    </table>
      </>
)}

export default Dashbord