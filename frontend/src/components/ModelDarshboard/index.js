import React from "react";

const ItemTabela = ({ emp, index, updateStep, deleteBtn }) => {
  return (
    <tr>
      <td>{emp.step === "potencial" ? emp.nome : ""}</td>
      <td>{emp.step === "confirmado" ? emp.nome : ""}</td>
      <td>{emp.step === "agendado" ? emp.nome : ""}</td>
      <td className="text-right">
        <button
          disabled={emp.step === "agendado" ? true : false}
          className="btn btn-info"
          onClick={() => updateStep(index)}
        >
          Avançar
        </button>
        {/* <button className="btn btn-danger"
          onClick={()=> deleteBtn(index)
          
          }
        >Finalizar</button> */}
      </td>
    </tr>
  );
};

export default ItemTabela;
