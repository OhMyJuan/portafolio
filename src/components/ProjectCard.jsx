import React from 'react';
import styles from './styles/ProjectCard.module.css';

function ProjectCard({ imagen, nombre, descripcion, enlace }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__imgContainer}>
        <img src={imagen} alt={nombre} />
      </div>

      <div className={styles.projectCard__textContainer}>
        <h4><a className={styles.projectCard__title} href="https://fakescord-fd551.web.app/">{nombre}</a></h4>
        <p className={styles.projectCard__description}>{descripcion}</p>
        <div className={styles.projectCard__codeButtonContainer}>
          <a href={enlace} target='_blank' rel="noreferrer">
            <button className={styles.projectCard__codeButton}>Código Fuente</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
