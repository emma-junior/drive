import React from 'react'
import Image from 'next/image'
import styles from "./navbar.module.scss"
import useAnimation from '../../animations';


const Navbar = () => {
  const { app } = useAnimation();
  return (
    <nav ref={app} className={styles.navbar}>
        <Image className={` logo ${styles.navbar_logo}`} src="/svgs/logo.svg" alt='' width={150} height={60} />
        <ul>
          <li className='menuitem'>STORY</li>
          <li className='menuitem'>TEAM</li>
          <li className='menuitem'>PORTFOLIO</li>
          <li className='menuitem'>TALENT</li>
        </ul>
    </nav>
  )
}

export default Navbar