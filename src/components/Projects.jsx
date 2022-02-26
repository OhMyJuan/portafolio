import React from "react";
import styles from "./styles/Projects.module.css";
import ProjectCard from "./ProjectCard";
import fakescordImg from "../img/fakescord-proyecto-card.png";
import reactCRUDImg from "../img/reactCRUD-proyecto-card.png"

function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.projects__header}>
        <h2 className={styles.projects__headerTitle}>Proyectos</h2>
      </div>

      <div className={styles.projects__container}>
        <ProjectCard
          nombre="Fakescord"
          imagen={fakescordImg}
          descripcion="Es una aplicación web de envío de mensajes por canales"
          enlace="https://github.com/JuanC-Jurado/fakescord"
        />

        <ProjectCard 
          nombre="React CRUD"
          imagen={reactCRUDImg}
          descripcion="Es una aplicación web en la que se pueden agendar tareas pendientes"
          enlace="https://github.com/JuanC-Jurado/reactCRUD"
        />
      </div>
    </div>
  );
}

export default Projects;
