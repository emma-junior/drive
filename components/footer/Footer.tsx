import React,{ReactElement} from 'react'
import styles from "./footer.module.scss"
import Image from 'next/image'



const Footer = ():ReactElement => {
  return (
    <section className={styles.footer}>
        <div className={styles.footer_subscribe}>
            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            <div className={styles.footer_subscribe_inputwrapper}>
                <input type='email' placeholder='YOUR@EMAIL.COM' />
                <div className={styles.footer_subscribe_inputwrapper_arrow}><Image className={styles.box} src="/svgs/arrowright.svg" alt='' width={18} height={17} /></div>
            </div>
        </div>
        <div className={styles.footer_links}>
            <ul>
                <li>PORTFOLIO</li>
                <li>STORY</li>
                <li>TEAM</li>
                <li>CAREERS</li>
                <li>TALENT</li>
            </ul>
            <ul>
                <li>MEDIA KIT</li>
                <li>DIVERSITY REPORTS</li>
                <li>CONTACT</li>
                <li>INVESTOR LOGIN</li>
                <li>SEED PROGRAM</li>
            </ul>
            <div className={styles.footer_links_logo}><Image className={styles.box} src="/svgs/logoT.svg" alt='' width={100} height={100} /></div>
        </div>
    </section>
  )
}

export default Footer