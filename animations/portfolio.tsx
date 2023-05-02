import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const usePortfolioAnimation = () => {

    let app = useRef<HTMLDivElement>(null);
    const tl = useRef<GSAPTimeline>()

     useEffect(() => {

        let ctx = gsap.context(() => {
            ScrollTrigger.saveStyles(".first, .second");

            tl.current = gsap.timeline({
                scrollTrigger: {trigger: ".marquee", start: "bottom bottom", scrub: 7}
            })
            .to(".first", {duration: 2, x: -300})
            .to(".second", {duration: 2, x: 300},"<")

            tl.current = gsap.timeline({
                scrollTrigger: {trigger: ".content", start: "top bottom"}
            })
            .from(".content", {y:100, opacity: 0},)
            .to(".content", {y:0, opacity: 1},)

        }, app);

    return () => ctx.revert()
  }, [])
    
    return {app}
}

export default usePortfolioAnimation