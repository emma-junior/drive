import React,{ReactElement} from 'react'
import styles from "./countries.module.scss"


const Countries = ():ReactElement => {
  return (
    <section className={styles.countries}>
        <figure className={styles.countries_imageone}>
            <img src="/images/countryone.jpg" alt='' />
        </figure>
        <figure className={styles.countries_imagetwo}>
            <img src="/images/countrytwo.jpg" alt='' />
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
    </section>
  )
}

export default Countries