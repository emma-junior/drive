import React, { ReactElement } from "react";
import styles from "./market.module.scss";
import useTeamAnimation from "../../animations/team";

const Market = (): ReactElement => {
  const { app } = useTeamAnimation();
  return (
    <section ref={app} className={styles.market}>
      <div className={`teampics ${styles.market_images}`}>
        <figure className={`teamone ${styles.market_images_one}`}>
          <img src="/images/marketone.jpg" alt="portfolio image" />
        </figure>
        <figure className={`teamtwo ${styles.market_images_two}`}>
          <img src="/images/markettwo.jpg" alt="portfolio image" />
        </figure>
      </div>
      <div className={styles.market_pattern}>
        <figure className={styles.market_pattern_image}>
          <img src="/svgs/market.svg" alt="engineering" />
        </figure>
      </div>
      <div className={styles.market_topic}>
        <h1>THE GREATEST EMERGING MARKET FOR VC IS AMERICA</h1>
      </div>
    </section>
  );
};

export default Market;
