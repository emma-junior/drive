import React, { ReactElement } from "react";
import styles from "./hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.hero}>
        <p className={styles.hero_p}>GREATNESS IS IN OUR BACKYARD</p>
        <p className={styles.hero_drive}>DRIVE</p>
    </div>
  )
}

export default Hero