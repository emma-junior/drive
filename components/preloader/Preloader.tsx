import React, {ReactElement, useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import styles from "./preloader.module.scss"
import SplitType from 'split-type'

const Preloader = ():ReactElement => {
    const componentRef = useRef(null);
    gsap.config({
        autoSleep: 60,
        force3D: false,
        nullTargetWarn: false,  
  } );
    useEffect(() => {
        let herotext = SplitType.create('.text')
        import('pace-js').then((pace) => {
            pace.default.start();

            pace.default.once('done', () => {

                gsap.timeline()
                .to('.loading__text', {
                    delay: .2, 
                    duration: 3, 
                    opacity: 0, 
                    yPercent: -400, 
                    ease: "BezierEasing(0.19,1,0.22,1)"
                }, 'p')
                .to(componentRef.current, {backgroundColor: '#0A0A0B',duration: 1,
                }, '-=2.5')
                .to('.app', {duration: 2, delay: .3, opacity: 1,
                }, )
                .to('.logo', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3, duration: 0.8},'-=2.5')
                .to('.menuitem', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y: 0, stagger: .3, opacity: 1, duration: 1}, "-=1.5")
                .to(".drive", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y: 0, opacity: 1, duration: 1.5 }, "-=1.5")
                .to(".text", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }, "-=1.5")
                .to(".char", { y: 0, stagger: 0.05, opacity: 1, delay:0.2, duration: .1 },)
                .to(".heroSlide", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }, "-=0.5")
            })
        });
    }, []);

  return (
    <div ref={componentRef} style={{ backgroundColor: '#1A1B1E' }} className={`preloader ${styles.preloader}`}>
        <div className={`loading__text ${styles.preloader_loading__text}`}>
            LOADING
        </div>
    </div>
  )
}

export default Preloader