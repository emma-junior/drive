import React from "react";
import styles from "./slides.module.scss";

const PortfolioSlider = () => {
  return (
    <div className={`marquee ${styles.portfolio_marquee}`}>
      <figure
        className={`portfolio_imageone ${styles.portfolio_marquee_imageone}`}
      >
        <img src="/images/portfolioone.jpg" alt="city" />
      </figure>
      <figure
        className={`portfolio_imagetwo ${styles.portfolio_marquee_imagetwo}`}
      >
        <img src="/images/portfoliotwo.jpg" alt="man" />
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
  );
};

export default PortfolioSlider;
