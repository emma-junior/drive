import React from 'react'
import { story} from "../../data";
import Features from '../features/Features';
import styles from "./story.module.scss"
import useStoryAnimation from '../../animations/story';

const Story = () => {
    const { app } = useStoryAnimation();
  return (
    <section ref={app} className={styles.story} id='story'>
        <div className={`storypics ${styles.story_images}`}>
            <figure className={`storyone ${styles.story_images_one}`}>
                <img src="/images/storyone.jpg" alt='' />
            </figure>
            <figure className={`storytwo ${styles.story_images_two}`}>
                <img src="/images/storytwo.jpg" alt='' />
            </figure>
            <figure className={`storythree ${styles.story_images_three}`}>
                <img src="/images/storythree.jpg" alt='' />
            </figure>
        </div>
        <Features details={story} />
    </section>
  )
}

export default Story