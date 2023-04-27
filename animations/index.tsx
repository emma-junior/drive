import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import SplitType from 'split-type'

const useAnimation = () => {
let app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>()

  useEffect(() => {
    let herotext = SplitType.create('.herotext')

    let ctx = gsap.context(() => {

      tl.current = gsap.timeline()
        .to('.logo', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3, duration: 0.8},)
        .to('.menuitem', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y: 0, stagger: .4, opacity: 1, duration: 1}, )
        .to(".drive", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',y: 0, opacity: 1, duration: 1.5 }, "-=0.4")
        .to(".herotext", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },)
        .to(".char", { y: 0, stagger: 0.05, opacity: 1, delay:0.2, duration: .1 },)

    }, app);

    return () => ctx.revert()

  }, [])

    return {app}
}

export default useAnimation;