import React from "react";

const ItemTabela = ({ empresa, setEmpresas }) => {
  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    localStorage.setItem("empresa", JSON.stringify(empresa));
  }

  function drop(event, dropEmpresa, coluna) {
    event.preventDefault();

    let storagedEmpresa = localStorage.getItem("empresa");
    if (storagedEmpresa) {
      storagedEmpresa = JSON.parse(storagedEmpresa);
    }

    if (dropEmpresa.nome !== storagedEmpresa.nome) {
      return;
    }

    if(dropEmpresa.step === 'potencial' && coluna !== 'confirmado') {
        return
    }

    if(dropEmpresa.step === 'confirmado' && coluna !== 'agendado') {
        return
    }

    if(dropEmpresa.step === 'agendado') {
        return
    }

    dropEmpresa.step = coluna;

    let empresas = localStorage.getItem("empresas");

    if (empresas) {
      empresas = JSON.parse(empresas);
      const novasEmpresas = empresas.map((empresa) => {
        if (empresa.nome === dropEmpresa.nome) {
          return dropEmpresa;
        } else {
          return empresa;
        }
      });

      localStorage.setItem("empresas", JSON.stringify(novasEmpresas));

      setEmpresas(novasEmpresas)
    }
  }

  return (
    <tr>
      <th
        className="repeat"
        onDragStart={drag}
        onDrop={(event) => drop(event, empresa, "potencial")}
        onDragOver={allowDrop}
        draggable="true"
      >
        {empresa.step === "potencial" ? empresa.nome : ""}
      </th>
      <th
        className="repeat"
        onDragStart={drag}
        onDrop={(event) => drop(event, empresa, "confirmado")}
        onDragOver={allowDrop}
        draggable="true"
      >
        {empresa.step === "confirmado" ? empresa.nome : ""}
      </th>
      <th
        className="repeat"
        onDragStart={drag}
        onDrop={(event) => drop(event, empresa, "agendado")}
        onDragOver={allowDrop}
        draggable="true"
      >
        {empresa.step === "agendado" ? empresa.nome : ""}
      </th>
    </tr>
  );
};

export default ItemTabela;
