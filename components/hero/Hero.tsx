import React, { ReactElement } from "react";
import styles from "./hero.module.scss"


const Hero = ():ReactElement => {
  
  return (
    <section  className={styles.hero}>
        <p className={`herotext ${styles.hero_p}`}>GREATNESS{""}IS{""}IN{""}OUR{""}BACKYARD</p>
        <div className={`drive ${styles.hero_drive}`}><p >DRIVE</p></div>
    </section>
  )
}

export default Hero