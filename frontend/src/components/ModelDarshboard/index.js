import React from 'react';

const ItemTabela = ({filme}) =>{
    
    return(
        <tr>
        <td>{filme.nome}</td>
        <td></td>
        <td></td>
        <td className="text-right">
            <button className="btn btn-info">Avançar</button>{' '}
            <button className="btn btn-danger">Finalizar</button>
        </td>
        </tr>
    )
}

export default ItemTabela