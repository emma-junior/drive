import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const useStoryAnimation= () => {
  
  let app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>()
  
  useEffect(() => {

    let ctx = gsap.context(() => {

        ScrollTrigger.matchMedia({
            "(max-width: 768px)": function() {
    
                tl.current = gsap.timeline({
                    scrollTrigger: {trigger: ".storyone",start: "top bottom",}
                });
                tl.current.from(".storyone", {scale:0, opacity: 0},)
                .to(".storyone", { scale:1, x: 0, opacity: 1})

                tl.current = gsap.timeline({
                    scrollTrigger: {trigger: ".storytwo",start: "top bottom",}
                });
                tl.current.from(".storytwo", {scale:0, opacity: 0},)
                .to(".storytwo", { scale:1, x: 0, opacity: 1})

                tl.current = gsap.timeline({
                    scrollTrigger: {trigger: ".storythree",start: "top bottom",}
                });
                tl.current.from(".storythree", {scale:0, opacity: 0},)
                .to(".storythree", { scale:1, x: 0, opacity: 1})

            },
            "(min-width: 769px)": function() {
                tl.current = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".storypics",
                        start: "top bottom",
                    }
                });
                tl.current.from(".storyone", {x: -200, opacity: 0},)
                .to(".storyone", {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', scale:1, x: 0, opacity: 1})
                .from(".storytwo", {y: 200, opacity: 0},"<")
                .to(".storytwo", {y: 0, opacity: 1},"<")
                .from(".storythree", {x: 200, opacity: 0},"<")
                .to(".storythree", {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', x: 0, opacity: 1},"<")
            }
        })

    
        tl.current = gsap.timeline({
            scrollTrigger: {trigger: ".features", start: "top bottom"}
        })
        .from(".features", {y:100, opacity: 0},)
        .to(".features", {y:0, opacity: 1},)

    },app)
    return () => ctx.revert()
    

  }, [])

    return {app}
}

export default useStoryAnimation;