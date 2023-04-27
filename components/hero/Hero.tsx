import React, { ReactElement } from "react";
import styles from "./hero.module.scss"
import useAnimation from "../../animations";


const Hero = ():ReactElement => {
  const { app } = useAnimation();
  
  return (
    <section ref={app}  className={styles.hero}>
        <div className={styles.hero_text}>
          <div className={`text ${styles.hero_text_p}`}>GREATNESS&nbsp;IS&nbsp;IN&nbsp;OUR&nbsp;BACKYARD</div>
        </div>
        <div className={`drive ${styles.hero_drive}`}><p >DRIVE</p></div>
        <div className={styles.hero_slides}>
          <div className={styles.hero_slides_wrapper}>
            {(() => {
                const arr = [];
                for (let i = 0; i < 2; i++) {
                    arr.push(
                        <div key={i} className="">
                            <span>CAPITAL THAT COMES TO YOU</span>
                            <span>MSP</span>
                            <span>TRUE PARTNERS</span>
                            <span>IDEA TO IPO</span>
                        </div>
                    );
                }
                return arr;
            })()}
          </div>
        </div>
    </section>
  )
}

export default Hero