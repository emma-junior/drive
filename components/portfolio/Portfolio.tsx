import React from 'react'
import styles from "./portfolio.module.scss"
import Image from 'next/image'
import { portfolio } from '../../data';
import Button from '../button/Button';
import PortfolioSlider from '../portfolioSlider';
import usePortfolioAnimation from '../../animations/portfolio';

const Portfolio = () => {
    const { app } = usePortfolioAnimation();
  return (
    <section ref={app} className={styles.portfolio}>
        <div className={styles.portfolio_header}>
            <p><Image className={styles.box} src="/svgs/box.svg" alt='' width={18} height={18} />CANDID CONVICTION</p>
            <p>We're relentless because we have to be. Entrepreneurs choose to partner with Drive because they want convicted investors who will push them to be great.</p>
            <p>Great founders don't want cheerleaders or cheap platitudes. They want honesty about what works and what doesn't. They want the best tools available for doing their life's work.</p>
        </div>
        <PortfolioSlider />
        <div className={`content ${styles.portfolio_content}`}>
            <h2 className={styles.portfolio_content_title}>{portfolio.title}</h2>
            <p className={styles.portfolio_content_p}>&emsp;&emsp;&emsp;&emsp;&emsp; {portfolio.info}</p>
            <Button word={portfolio.link} />
        </div>
    </section>
  )
}

export default Portfolio