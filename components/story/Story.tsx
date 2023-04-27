import React from 'react'
import Image from 'next/image'
import styles from "./story.module.scss"

const Story = () => {
  return (
    <section className={styles.story}>
        <div className={styles.story_images}>
            <figure className={styles.story_images_one}>
                <img src='/images/storyone.jpg' alt='' />
            </figure>
            <figure className={styles.story_images_two}>
                <img src='/images/storytwo.jpg' alt='' />
            </figure>
            <figure className={styles.story_images_three}>
                <img src='/images/storythree.jpg' alt='' />
            </figure>
        </div>
        <div className={styles.story_content}>
            <div className={styles.story_content_header}>
                <h2>OUR STORY</h2>
                <button>VIEW OUR STORY</button>
            </div>
            <p className={styles.story_content_p}>&emsp;&emsp;&emsp;&emsp;&emsp; Today, technology cuts horizontally through every business and industry. There are more billion-dollar oportunities east of the Rockies and west of the Hudson River than everywhere else in North America combined --- we're documenting the stories of building in-between and beyond.</p>
        </div>
    </section>
  )
}

export default Story