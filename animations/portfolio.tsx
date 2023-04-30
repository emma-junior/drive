import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const useAnimationThree = () => {

    let app = useRef<HTMLDivElement>(null);
    const tl = useRef<GSAPTimeline>()

     useEffect(() => {

        let ctx = gsap.context(() => {
            ScrollTrigger.saveStyles(".first, .second");
            
            ScrollTrigger.matchMedia({
  
                "(max-width: 768px)": function() {
                    
                    tl.current = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".marquee",
                        start: "top bottom",
                        scrub: 1,
                    }
                    });

                    tl.current.to(".first", {duration: 2, x: -200})
                            .to(".second", {duration: 2, x: 200,},)
                },
  
                "(min-width: 769px)": function() {

                    tl.current = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".marquee",
                        start: "bottom bottom",
                        scrub: 7,
                        // markers: true,
                    }
                    });

                    tl.current.to(".first", {duration: 2, x: -300})
                            .to(".second", {duration: 2, x: 300},"<")
                }
            });
        }, app);

    return () => ctx.revert()
  }, [])
    
    return {app}
}

export default useAnimationThree