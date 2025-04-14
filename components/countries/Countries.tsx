import React, { ReactElement } from "react";
import styles from "./countries.module.scss";
import useAnimation from "../../animations/index";

const Countries = (): ReactElement => {
  const { app } = useAnimation();
  return (
    <section ref={app} className={` ${styles.countries}`}>
      <div className="countries">
        <figure className={`countries_imageone ${styles.countries_imageone}`}>
          <img src="/images/countryone.jpg" alt="city" />
        </figure>
        <figure className={`countries_imagetwo ${styles.countries_imagetwo}`}>
          <img src="/images/countrytwo.jpg" alt="bridge" />
        </figure>
        <div className={styles.countries_container}>
          <h1>DENVER</h1>
          <h1>TORONTO</h1>
          <span className={styles.countries_container_slide}>
            <h1>TRIGGER HEALTH THOUGHTFUL TRIGGER</h1>
          </span>
          <h1>COLUMBUS</h1>
          <h1>PITTSBURGE</h1>
          <h1>CINCINNATI</h1>
          <h1 className={styles.countries_container_more}>& MORE</h1>
        </div>
      </div>
    </section>
  );
};

export default Countries;
