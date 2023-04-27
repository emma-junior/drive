import React,{ReactElement} from 'react'
import styles from "./story.module.scss"
// import useAnimation from "../../animations";
import useAnimationo from '../../animations/story';

const Story = ():ReactElement => {
    const { appi } = useAnimationo();
  return (
    <section ref={appi}  className={styles.story}>
        <div className={styles.story_images}>
            <figure className={`storyone ${styles.story_images_one}`}>
                <img src='/images/storyone.jpg' alt='' />
            </figure>
            <figure className={`storytwo ${styles.story_images_two}`}>
                <img src='/images/storytwo.jpg' alt='' />
            </figure>
            <figure className={`storythree ${styles.story_images_three}`}>
                <img src='/images/storythree.jpg' alt='' />
            </figure>
        </div>
        <div className={`topi ${styles.story_content}`}>
            <div className={styles.story_content_header}>
                <h2 className={`topic`}>OUR&nbsp;STORY</h2>
                <button>VIEW OUR STORY</button>
            </div>
            <p className={`info ${styles.story_content_p}`}>&emsp;&emsp;&emsp;&emsp;&emsp; Today, technology cuts horizontally through every business and industry. There are more billion-dollar oportunities east of the Rockies and west of the Hudson River than everywhere else in North America combined --- we're documenting the stories of building in-between and beyond.</p>
        </div>
    </section>
  )
}

export default Story