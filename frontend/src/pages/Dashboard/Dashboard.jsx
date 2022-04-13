import React, { useEffect, useState } from "react";
import Logo from "../../assets/log-escrito.jpg";
import ItemTabela from "../../components/ItemTabela/index";
import Modal from "../../components/AddLead/AddLead";

const Dashbord = () => {
  const [modal, setModal] = useState(false);
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    let storagedEmpresas = localStorage.getItem("empresas");

    if (storagedEmpresas) {
      storagedEmpresas = JSON.parse(storagedEmpresas);
      setEmpresas(storagedEmpresas);
    }
  }, [modal]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Logo} alt="" width="" height="65" />
          </div>
          <div className="col">Painel de leads</div>
        </div>
        <button
          type="button"
          onClick={() => setModal(true)}
          className="btn btn-info"
        >
          Novo Lead (+)
        </button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Cliente em Potencial</th>
            <th scope="col">Dados Confirmados</th>
            <th scope="col">Reunião Agendada</th>
          </tr>
        </thead>
        <tbody>
          {empresas &&
            empresas.map(( ) => (
              <ItemTabela
               
              />
            ))}
        </tbody>
      </table>

      {modal ? <Modal onClose={() => setModal(false)}></Modal> : null}
    </>
  );
};

export default Dashbord;
