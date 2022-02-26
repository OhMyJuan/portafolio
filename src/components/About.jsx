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
            Juan
            <br />
            Jurado
          </p>
        </div>
        <p className={styles.about__legend}>
          Soy desarrollador Frontend Junior{" "}
          <strong className={styles.strong}>autodidacta</strong> en React y me
          apasiona crear experiencias funcionales y bonitas en la web.
        </p>

        <div className={styles.about__curriculum}>
          <a href={curriculum} target='_blank' rel="noreferrer"><buttom>Ver Curriculum</buttom></a>
        </div>
      </div>
    </div>
  );
}

export default About;
