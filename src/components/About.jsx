import React from "react";
import styles from "./styles/About.module.css";
import curriculum from "../CV-JuanJurado.pdf"

function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about__header}>
        <h2 className={styles.about__headerTitle}>Acerca de mí</h2>
      </div>
      <div className={styles.about__image}>
        <div className={styles.about__foto}></div>
      </div>
      <div className={styles.about__imageOverlay}></div>

      <div className={styles.about__content}>
        <div className={styles.home__circleName}>
          <p className={styles.about__name}>
            Juan<br />Jurado
          </p>
        </div>
        <p className={styles.about__legend}>
          Soy <strong className={styles.strong}>Licenciado en Investigación Criminal y Seguridad</strong> con experiencia en el área de investigación judicial.<br/>Me encanta el área de la informática, tanto que actualmente estoy estudiando una segunda carrera en <strong className={styles.strong}>ciberseguridad</strong>.<br/>Tengo conocimientos en proramación web <strong className={styles.strong}>frontend</strong>, un poco de <strong className={styles.strong}>backend</strong> y actualmente estoy prácticando mis habilidades en <strong className={styles.strong}>bash scripting</strong>.<br/>Siempre estoy en busca de nuevos retos, me gusta ponerme a prueba y demostrar mis conocimientos.
        </p>

        <div className={styles.about__curriculum}>
          <a href={curriculum} target='_blank' rel="noreferrer"><buttom>Ver Curriculum</buttom></a>
        </div>
      </div>
    </div>
  );
}

export default About;
