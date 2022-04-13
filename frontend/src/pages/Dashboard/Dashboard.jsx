import React, { useState } from "react";
import Logo from "../../assets/log-escrito.jpg";
import Modal from "../../components/AddLead/AddLead";
import TableLeads from "../../components/TableLeads/TableLeads";

const Dashbord = () => {
  const [modal, setModal] = useState(false);

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

      <TableLeads />

      {modal && <Modal onClose={() => setModal(false)}></Modal>}
    </>
  );
};

export default Dashbord;
