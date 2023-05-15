import React from "react";
import styles from "./styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import fakescordImg from "../img/fakescord-proyecto-card.png";

function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.projects__header}>
        <h2 className={styles.projects__headerTitle}>Proyectos Personales</h2>
      </div>

      <div className={styles.projects__container}>
        <ProjectCard
          nombre="Fakescord"
          imagen={fakescordImg}
          descripcion="Es una aplicación web de envío de mensajes por canales"
          enlaceCodigo="https://github.com/JuanC-Jurado/fakescord"
          enlace="https://fakescord-fd551.web.app/"
        />

      </div>
    </div>
  );
}

export default Projects;
