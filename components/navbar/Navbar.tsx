import React, {ReactElement, useState} from 'react'
import Image from 'next/image'
import styles from "./navbar.module.scss"
import useAnimation from '../../animations';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ():ReactElement => {
  const { app } = useAnimation();
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => setClick(!click)
  return (
    <nav ref={app} className={styles.navbar}>
        <Image className={` logo ${styles.navbar_logo}`} src="/svgs/logo.svg" alt='' width={150} height={60} />
        <div className={click ? styles.showSidebar : styles.navLinks}>
          <ul>
            <Link activeClass="active" to='story' smooth={true}><li className='menuitem' onClick={handleClick}>STORY</li></Link>
            <Link activeClass="active" to='team' smooth={true}><li className='menuitem' onClick={handleClick}>TEAM</li></Link>
            <Link activeClass="active" to='portfolio' smooth={true}><li className='menuitem' onClick={handleClick}>PORTFOLIO</li></Link>
            <Link activeClass="active" to='#' smooth={true}><li className='menuitem' onClick={handleClick}>TALENT</li></Link>
          </ul>
        </div>
        <div className={`menuitem ${styles.mobileIcon}`} onClick={handleClick}>
                {!click ?  <Image src="/svgs/bar.svg" alt='' width={40} height={40} />: <Image src="/svgs/times.svg" alt='' width={40} height={40} />}
        </div>
    </nav>
  )
}

export default Navbar