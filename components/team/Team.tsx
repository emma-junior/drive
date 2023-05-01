import React from 'react'
import { team} from "../../data";
import styles from "./team.module.scss"
import Features from '../features/Features';
import useTeamAnimation from '../../animations/team';

const Team = () => {
    const { app } = useTeamAnimation();
  return (
    <section ref={app} className={styles.team}>
        <div className={`teampics ${styles.team_images}`}>
            <figure className={`teamone ${styles.team_images_one}`}>
                <img src="/images/teamone.jpg" alt='' />
            </figure>
            <figure className={`teamtwo ${styles.team_images_two}`}>
                <img src="/images/teamtwo.jpg" alt='' />
            </figure>
        </div>
        <Features details={team} />
    </section>
  )
}

export default Team