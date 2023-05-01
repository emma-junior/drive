import React,{ReactElement} from 'react'
import styles from "./features.module.scss"
import { storyType } from '../../data';
import Button from '../button/Button';

interface Props {
    details: storyType;    
}
const Features = ({details}:Props):ReactElement => {
    
  return (
    <section  className={styles.features}>
        <div className={`features ${styles.features_content}`}>
            <div className={styles.features_content_header}>
                <h2>{details.title}</h2>
                <Button word={details.link} />
            </div>
            <p className={`info ${styles.features_content_p}`}>&emsp;&emsp;&emsp;&emsp;&emsp; {details.info}</p>
        </div>
    </section>
  )
}

export default Features