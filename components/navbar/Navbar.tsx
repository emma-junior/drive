import React, {ReactElement, useState} from 'react'
import Image from 'next/image'
import styles from "./navbar.module.scss"
import useAnimation from '../../animations';


const Navbar = () => {
  const { app } = useAnimation();
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => setClick(!click)
  return (
    <nav ref={app} className={styles.navbar}>
        <Image className={` logo ${styles.navbar_logo}`} src="/svgs/logo.svg" alt='' width={150} height={60} />
        <div className={click ? styles.showSidebar : styles.navLinks}>
          <ul>
            <li className='menuitem'>STORY</li>
            <li className='menuitem'>TEAM</li>
            <li className='menuitem'>PORTFOLIO</li>
            <li className='menuitem'>TALENT</li>
          </ul>
        </div>
        <div className={`menuitem ${styles.mobileIcon}`} onClick={handleClick}>
                {!click ?  <Image src="/svgs/bar.svg" alt='' width={40} height={40} />: <Image src="/svgs/times.svg" alt='' width={40} height={40} />}
        </div>
    </nav>
  )
}

export default Navbar