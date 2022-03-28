import React, { useEffect, useState } from "react";
import Logo from "../../assets/log-escrito.jpg";
import ItemTabela from "../../components/ModelDarshboard/index";
import Modal from "../../components/AddLead/AddLead";

const Dashbord = () => {
  const [modal, setModal] = useState(false);
  const [empresas, setEmpresas] = useState([]);

  const updateStep = (index) => {
    const newEmpresas = [...empresas];

    switch (newEmpresas[index].step) {
      case "potencial":
        newEmpresas[index].step = "confirmado";
        break;
      case "confirmado":
        newEmpresas[index].step = "agendado";
        break;
      default:
        newEmpresas[index].step = "agendado";
    }

    localStorage.setItem("empresas", JSON.stringify(newEmpresas));

    setEmpresas(newEmpresas);
  };

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
            <th scope="col" className="text-right">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {empresas &&
            empresas.map((emp, index) => (
              <ItemTabela
                updateStep={updateStep}
                key={emp.nome}
                index={index}
                emp={emp}
              />
            ))}
        </tbody>
      </table>

      {modal ? <Modal onClose={() => setModal(false)}></Modal> : null}
    </>
  );
};

export default Dashbord;
