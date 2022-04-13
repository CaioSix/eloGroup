import React,{ useState, useEffect } from "react";

const ItemTabela = () => {
  const [list,setList] = useState([["Internacional","",""],["LTDA","",""],["Muscp","",""]])
   
  localStorage.setItem('empresas',JSON.stringify(list))
    useEffect(() =>{
      let dados = localStorage.getItem('empresas');
      dados = JSON.parse(dados);
      if(dados!=null)
          setList(dados)
  },[])

  const [info,setInfo] = useState("")
  function True(element){
      if(element){
          return true
      }else{
          return false
      }
  }

  function allowDrop(ev) {
      ev.preventDefault();
    }
    
    function drag(ev) {
      let valor = ev.target.innerText
      setInfo(valor)
    }
    
    function drop(ev) {
      ev.preventDefault()
      let itens = info
      let dados = localStorage.getItem('empresas');
      dados = JSON.parse(dados);
      let carata = dados
      function findArray(array){
          let boolList = array.map(list => list.includes(itens))
          return boolList.findIndex(True)
          }

      function findElement(element,list){
          let contador = 0
          for(let i=0; i < list.length; i++){
              contador++
              if(element === list[i])
                  return contador - 1
          }
      }
      let listaChange = list[findArray(carata)]
      let indexElementChange = findElement(itens,listaChange)
      let aux = listaChange[indexElementChange+1]
      
      if(indexElementChange !== 2){
          
          listaChange[indexElementChange + 1] = listaChange[indexElementChange]
          listaChange[indexElementChange] = aux

          let index = findArray(carata)
          if(index > -1){
              carata.splice(index,1)
          }
          let listaTotal = [listaChange].concat(carata)
          localStorage.setItem('copiaLead',JSON.stringify(listaTotal));
          setList(listaTotal)
          
      }   
      else{
              alert("Movimento Bloqueado")
      }      
  }

  return (
 
        list.map(element =>{
                   
                    return(
                        <tr >
                            <th className="repeat" onDragStart={drag} draggable="true">{element[0]}</th>
                            <th className="repeat" onDragStart={drag} onDrop={drop} onDragOver={allowDrop}draggable="true">{element[1]}</th>
                            <th className="repeat" onDrop={drop} onDragOver={allowDrop} draggable="true">{element[2]}</th>
                        </tr>
                        )      
                    }
                )

       
   
)
};

export default ItemTabela;
