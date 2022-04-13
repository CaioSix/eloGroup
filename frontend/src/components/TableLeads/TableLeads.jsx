import React, { useEffect, useState } from "react";
import ItemTabela from "../ItemTabela";

const TableLeads = () => {
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
      let storagedEmpresas = localStorage.getItem("empresas");
  
      if (storagedEmpresas) {
        storagedEmpresas = JSON.parse(storagedEmpresas);
        setEmpresas(storagedEmpresas);
      }
    }, []);

  return (
      <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Cliente em Potencial</th>
            <th scope="col">Dados Confirmados</th>
            <th scope="col">Reunião Agendada</th>
          </tr>
        </thead>
        <tbody>{empresas && empresas.map((empresa) => <ItemTabela key={empresa.nome} empresa={empresa} setEmpresas={setEmpresas} />)}</tbody>
      </table>
      </>
  );
};

export default TableLeads;
