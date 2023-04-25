import React from 'react'
import Image from 'next/image'
import styles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Image className={`logo ${styles.navbar_logo}`} src="/svgs/logo.svg" alt='' width={150} height={60} />
    </nav>
  )
}

export default Navbar