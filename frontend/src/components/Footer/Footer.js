import React from "react";

import styles from "./styles.module.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer} >
        <p className={styles.text}>
          Feito Por Caio Cavalcanti {new Date().getFullYear()} - Todos direitos reservados
        </p>
      </footer>
    );
  }
}

export default Footer;
