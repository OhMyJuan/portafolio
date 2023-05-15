import React from 'react';
import styles from './styles/ProjectCard.module.css';

function ProjectCard({ imagen, nombre, descripcion, enlaceCodigo, enlace }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__imgContainer}>
        <img src={imagen} alt={nombre} />
      </div>

      <div className={styles.projectCard__textContainer}>
        <h4><a className={styles.projectCard__title} target="_blank" rel='noreferrer' href={enlace}>{nombre}</a></h4>
        <p className={styles.projectCard__description}>{descripcion}</p>
        <div className={styles.projectCard__codeButtonContainer}>
          <a href={enlaceCodigo} target='_blank' rel="noreferrer">
            <button className={styles.projectCard__codeButton}>Código Fuente</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
