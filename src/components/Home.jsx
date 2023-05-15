import React from "react";
import styles from "./styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home} id="home">
      <div className={styles.home__overlay}>
        <div className={styles.home__innerContainer}>
          <h2>
            ¡Hola, soy <span className={styles.home__innerName}>Juan</span>!
          </h2>
          <p>Programador Autodidacta</p>

          <div className={styles.home__buttonContainer}>
            <a href="https://github.com/JuanC-Jurado" target="blank" title='Github'>
              <div className={styles.home__socialButton}>
                <i className="fa-brands fa-github"></i>
              </div>
            </a>

            <a href="https://codepen.io/juanc-jurado" target="blank" title='Codepen'>
              <div className={styles.home__socialButton}>
                <i class="fa-brands fa-codepen"></i>
              </div>
            </a>

            <a href="https://www.instagram.com/x.juanj_02/" target="blank" title='Instagram'>
              <div className={styles.home__socialButton}>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
