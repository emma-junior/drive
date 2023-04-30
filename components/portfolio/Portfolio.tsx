import React from 'react'
import styles from "./portfolio.module.scss"
import Image from 'next/image'
import useAnimationThree from '../../animations/portfolio';
import { portfolio } from '../../data';
import Button from '../button/Button';

const Portfolio = () => {
    const { app } = useAnimationThree();
  return (
    <section ref={app} className={styles.portfolio}>
        <div className={styles.portfolio_header}>
            <p><Image className={styles.box} src="/svgs/box.svg" alt='' width={18} height={18} />CANDID CONVICTION</p>
            <p>We're relentless because we have to be. Entrepreneurs choose to partner with Drive because they want convicted investors who will push them to be great.</p>
            <p>Great founders don't want cheerleaders or cheap platitudes. They want honesty about what works and what doesn't. They want the best tools available for doing their life's work.</p>
        </div>
        <div className={styles.portfolio_marquee}>
            <figure className={styles.portfolio_marquee_imageone}>
                <img src="/images/portfolioone.jpg" alt='' />
            </figure>
            <figure className={styles.portfolio_marquee_imagetwo}>
                <img src="/images/portfoliotwo.jpg" alt='' />
            </figure>
            <div className={`first ${styles.portfolio_marquee_inner}`}>
                <span>COMPANIES</span>
                <span>2B</span>
                <span>CORPRATE</span>
                <span>COMPANIES</span>
            </div>
            <div className={`second ${styles.portfolio_marquee_inner}`}>
                <span>PARTNERS</span>
                <span>24</span>
                <span>CITIES</span>
                <span>16</span>
                <span>PARTNERS</span>
            </div>
        </div>
        <div className={styles.portfolio_content}>
            <h2 className={styles.portfolio_content_title}>{portfolio.title}</h2>
            <p className={styles.portfolio_content_p}>&emsp;&emsp;&emsp;&emsp;&emsp; {portfolio.info}</p>
            <Button word={portfolio.link} />
        </div>
    </section>
  )
}

export default Portfolio