import React, { ReactElement } from "react";
import styles from "./hero.module.scss"
import useAnimation from "../../animations";


const Hero = ():ReactElement => {
  const { app } = useAnimation();
  return (
    <section ref={app}  className={styles.hero}>
        <p className={`herotext ${styles.hero_p}`}>GREATNESS&nbsp;IS&nbsp;IN&nbsp;OUR&nbsp;BACKYARD</p>
        <div className={`drive ${styles.hero_drive}`}><p >DRIVE</p></div>
    </section>
  )
}

export default Hero