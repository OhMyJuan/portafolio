import React, { useState } from "react";
import styles from "./styles/Navbar.module.css";

function Navbar() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <nav className={mostrar ? styles.navbarOn : styles.navbarOff}>
        <div className={styles.navbar__header}>
          <h1>Juan Jurado</h1>
        </div>

        <ul>
          <li>
            <a onClick={()=>setMostrar(false)} className={styles.navbar__link} href="#home">
              Inicio
            </a>
          </li>
          <li>
            <a onClick={()=>setMostrar(false)} className={styles.navbar__link} href="#about">
              Acerca de mí
            </a>
          </li>
          <li>
            <a onClick={()=>setMostrar(false)} className={styles.navbar__link} href="#projects">
              Proyectos
            </a>
          </li>
        </ul>

        <div onClick={()=> setMostrar(false)} className={styles.navbar__closeButton}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <a onClick={()=>setMostrar(false)} href="#home">
          <div className={styles.navbar__goUpButton}>
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </a>
      </nav>

      {mostrar === false ? <div onClick={()=> setMostrar(true)} className={styles.navbar__openButton}>
        <i className="fa-solid fa-bars"></i>
      </div> : null}
    </>
  );
}

export default Navbar;
