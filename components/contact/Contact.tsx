import React, { useState, ReactElement } from "react";
import styles from "./contact.module.scss";
import Twitter from "./Twitter";
import Youtube from "./Youtube";
import Linkedin from "./Linkedin";

const Contact = (): ReactElement => {
  const [linkedinColor, setLinkedinColor] = useState("#272627");
  const [twitterColor, setTwitterColor] = useState("#272627");
  const [youtubeColor, setYoutubeColor] = useState("#272627");
  return (
    <div className={styles.contact}>
      <div className={styles.contact_wrapper}>
        <div className={styles.contact_wrapper_socials}>
          <div
            className={styles.contact_wrapper_socials_link}
            onMouseEnter={() => setLinkedinColor("#fff")}
            onMouseLeave={() => setLinkedinColor("#272627")}
          >
            <Linkedin color={linkedinColor} />
          </div>
          <div
            className={styles.contact_wrapper_socials_link}
            onMouseEnter={() => setTwitterColor("#fff")}
            onMouseLeave={() => setTwitterColor("#272627")}
          >
            <Twitter color={twitterColor} />
          </div>
          <div
            className={styles.contact_wrapper_socials_link}
            onMouseEnter={() => setYoutubeColor("#fff")}
            onMouseLeave={() => setYoutubeColor("#272627")}
          >
            <Youtube color={youtubeColor} />
          </div>
        </div>
        <p className={styles.contact_wrapper_address}>
          629 N. HIGH STREET COLUMBUS, OH 43215
        </p>
        <p>© 2023</p>
      </div>
    </div>
  );
};

export default Contact;
