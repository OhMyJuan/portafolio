import React from 'react';
import styles from './styles/ProjectCard.module.css';

function ProjectCard({ imagen, nombre, descripcion, enlace }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__imgContainer}>
        <img src={imagen} alt={nombre} />
      </div>

      <div className={styles.projectCard__textContainer}>
        <h4 className={styles.projectCard__title}>{nombre}</h4>
        <p className={styles.projectCard__description}>{descripcion}</p>
        <div className={styles.projectCard__codeButtonContainer}>
          <a href={enlace} target='_blank'> {/*eslint-disable-line*/}
            <button className={styles.projectCard__codeButton}>Ir al Código</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
