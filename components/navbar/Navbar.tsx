import React, { ReactElement, useState, useEffect, useContext } from "react";
import Image from "next/image";
import styles from "./navbar.module.scss";
import { SmoothScrollContext } from "../../hooks/SmoothScroll.context";

const Navbar = (): ReactElement => {
  const [click, setClick] = useState<boolean>(false);

  const [cursorX, setCursorX] = useState<number>();
  const [cursorY, setCursorY] = useState<number>();

  const { scroll } = useContext(SmoothScrollContext);

  const goToStorySection = (event: any) => {
    event.preventDefault();
    scroll && scroll?.scrollTo("#story");
    setClick(!click);
  };

  const goToTeamSection = (event: any) => {
    event.preventDefault();
    scroll && scroll?.scrollTo("#team");
    setClick(!click);
  };

  const goToPortfolioSection = (event: any) => {
    event.preventDefault();
    scroll && scroll?.scrollTo("#portfolio");
    setClick(!click);
  };

  const goToTop = (event: any) => {
    event.preventDefault();
    scroll && scroll.scrollTo(0);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => setClick(!click);
  return (
    <nav className={styles.navbar}>
      <Image
        className={` logo ${styles.navbar_logo}`}
        src="/svgs/logo.svg"
        alt=""
        width={150}
        height={60}
      />
      <div className={click ? styles.showSidebar : styles.navLinks}>
        <ul>
          <li className="menuitem" onClick={goToStorySection}>
            <a href="#story">STORY</a>
          </li>
          <li className="menuitem" onClick={goToTeamSection}>
            <a href="#team">TEAM</a>
          </li>
          <li className="menuitem" onClick={goToPortfolioSection}>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li className="menuitem" onClick={goToTop}>
            <a href="#">TALENT</a>
          </li>
          <div
            className={`cursor ${styles.navbar_cursor}`}
            style={{
              left: cursorX + "px",
              top: cursorY + "px",
            }}
          ></div>
        </ul>
      </div>

      <div className={`menuitem ${styles.mobileIcon}`} onClick={handleClick}>
        {!click ? (
          <Image src="/svgs/bar.svg" alt="" width={40} height={40} />
        ) : (
          <Image src="/svgs/times.svg" alt="" width={40} height={40} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
