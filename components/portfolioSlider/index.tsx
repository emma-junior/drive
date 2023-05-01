import React from 'react'
import styles from "./slides.module.scss"

const PortfolioSlider = () => {
  return (
    <div className={styles.portfolio_marquee}>
        <figure className={styles.portfolio_marquee_imageone}>
            <img src="/images/portfolioone.jpg" alt='' />
        </figure>
        <figure className={styles.portfolio_marquee_imagetwo}>
            <img src="/images/portfoliotwo.jpg" alt='' />
        </figure>
        <div className={`first ${styles.portfolio_marquee_innerone}`}>
            <span>COMPANIES</span>
            <span>2B</span>
            <span>CORPRATE</span>
            <span>COMPANIES</span>
        </div>
        <div className={`second ${styles.portfolio_marquee_innertwo}`}>
            <span>PARTNERS</span>
            <span>24</span>
            <span>CITIES</span>
            <span>16</span>
            <span>PARTNERS</span>
        </div>
    </div>
  )
}

export default PortfolioSlider