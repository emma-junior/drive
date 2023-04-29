import React,{ReactElement} from 'react'
import styles from "./features.module.scss"
import { storyType } from '../../data';
import useAnimationTwo from '../../animations/features';

interface Props {
    details: storyType;    
}
const Story = ({details}:Props):ReactElement => {
    const { app } = useAnimationTwo();
  return (
    <section ref={app}  className={styles.features}>
        <div className={styles.features_images}>
            <figure className={`featuresone ${styles.features_images_one}`}>
                <img src={`/images/${details.imageOne}`} alt='' />
            </figure>
            <figure className={`featurestwo ${styles.features_images_two}`}>
                <img src={`/images/${details.imageTwo}`} alt='' />
            </figure>
            <figure className={`featuresthree ${styles.features_images_three}`}>
                <img src={`/images/${details.imageThree}`} alt='' />
            </figure>
        </div>
        <div className={` ${styles.features_content}`}>
            <div className={styles.features_content_header}>
                <h2>{details.title}</h2>
                <button>{details.link}</button>
            </div>
            <p className={`info ${styles.features_content_p}`}>&emsp;&emsp;&emsp;&emsp;&emsp; {details.info}</p>
        </div>
    </section>
  )
}

export default Story