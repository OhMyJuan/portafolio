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
          <p>Desarrollador Web</p>

          <div className={styles.home__buttonContainer}>
            <a href="https://github.com/JuanC-Jurado"  title='Github'>
              <div className={styles.home__socialButton}>
                <i className="fa-brands fa-github"></i>
              </div>
            </a>
            
            <a href="https://codepen.io/juanc-jurado" title='Codepen'>
              <div className={styles.home__socialButton}>
                <i class="fa-brands fa-codepen"></i>
              </div>
            </a>

            <a href="https://www.instagram.com/x.juanj_02/" title='Instagram'>
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
