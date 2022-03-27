import React,{ useState} from 'react';
import './AddLead.css'
import Logo from '../../assets/log-escrito.jpg'

import { useForm } from 'react-hook-form'

const Modal = (  { onClose = () => {}, children}) => {

    const {register, handleSubmit } = useForm();

    const onSubmit = (e) => {
       const data = e
        console.log(data);
        localStorage.setItem('novaEmpresa', JSON.stringify(data));
    }
   
    return(
        <div className="modal-uno"  >
            <div className="modal-container">
                <button className="btn-close" onClick={onClose}></button>
                <div >

                 <div className="add">
                        <div className="head">
                            <div className="imgContainer noMargin">
                            <img src={Logo} alt="" width="" height="65" />
                            </div>
                            <p className="painelText"> Novo Lead</p>
                        </div> 
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="formLead">
                            <div className="formAddLead">
                                <p className ="inputText">Nome</p>
                                <input className="input" type="text" {...register("nome")} required="required" ></input>
                                <p className ="inputText">Telefone</p>
                                <input  className="input" type="tel"{...register("telefone")} title="O DDD precisa está presente, além disso, não deve haver espaços entre os números"pattern="[0-9]{2}[9][0-9]{4}[0-9]{4}"required="required"></input>
                                <p className ="inputText">Email</p>
                                <input  className="input" type="email"{...register("email")} required="required"></input>
                            </div>
                            <div className="flex">
                                <p className ="inputText widthMax">Oportunidades</p>
                                <table className="toCheck">
                                    <tr className="first heightTable">
                                        <th> <input id="fistCheck" type="checkbox"></input></th>
                                        <th></th>
                                    </tr>
                                    <tr className="heightTable gray">
                                        <th><input className="check"  type="checkbox" {...register("rpa")}></input></th>
                                        <th className="left">RPA</th>
                                    </tr>
                                    <tr className="heightTable white">
                                        <th><input className="check"  type="checkbox" {...register("ProdutoDigital")}></input></th>
                                        <th className="left">Produto Digital</th>
                                    </tr>
                                    <tr className="heightTable gray">
                                        <th><input className="check" type="checkbox" {...register("analytics")}></input></th>
                                        <th className="left">Analytics</th>
                                    </tr>
                                    <tr className="heightTable white">
                                        <th><input className="check" type="checkbox" {...register("bpm")}></input></th>
                                        <th className="left">BPM</th>
                                    </tr>
                                </table>



                                <button 
                                type="submit" 
                                
                                className="salveLead widthMax"
                                
                                >Salvar</button>
                                
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Modal

