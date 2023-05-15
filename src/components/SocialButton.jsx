import React from 'react'
import styles from './styles/Home.module.css'

function SocialButton({ link, name, icon }) {
  return (
    <a href={link} target="blank" title={name}>
        <div className={styles.home__socialButton}>
            <i className={icon}></i>
        </div>
    </a>
  )
}

export default SocialButton