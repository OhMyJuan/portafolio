import React from "react";
import SocialButton from "./SocialButton";
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

            <SocialButton
              name="Github"
              link="https://github.com/OhMyJuan"
              icon="fa-brands fa-github"
            />

            <SocialButton
              name="Codepen"
              link="https://codepen.io/juanc-jurado"
              icon="fa-brands fa-codepen"
            />

            <SocialButton
              name="Instagram"
              link="https://instagram.com/x.juanj_02?igshid=ZGUzMzM3NWJiOQ=="
              icon="fa-brands fa-instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
