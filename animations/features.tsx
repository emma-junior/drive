import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const useAnimationTwo= () => {
  
  let app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>()
  
  useEffect(() => {

    let ctx = gsap.context(() => {

        ScrollTrigger.matchMedia({
            "(max-width: 768px)": function() {
    
                let mobileTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".featuresone",
                        start: "top bottom",
                    }
                });
                mobileTL.from(".featuresone", {scale:0, opacity: 0},)
                .to(".featuresone", { scale:1, x: 0, opacity: 1})
            },
            "(min-width: 769px)": function() {
                let desktopTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".featuresone",
                        start: "top bottom",
                    }
                });
                desktopTL.from(".featuresone", {x: -200, opacity: 0},)
                .to(".featuresone", {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', scale:1, x: 0, opacity: 1})
            }
        })

        ScrollTrigger.matchMedia({
            "(max-width: 768px)": function() {
    
                let mobileTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".featuresthree",
                        start: "top bottom",
                    }
                });
                mobileTL.from(".featuresthree", {scale:0, opacity: 0},)
                .to(".featuresthree", { scale:1, x: 0, opacity: 1})
            },
            "(min-width: 769px)": function() {
                let desktopTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".featuresone",
                        start: "top bottom",
                    }
                });
                desktopTL.from(".featuresthree", {x: 200, opacity: 0},)
                .to(".featuresthree", {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', x: 0, opacity: 1},)
            }
        })

    
        tl.current = gsap.timeline({
            scrollTrigger: {trigger: ".featurestwo", start: "top bottom"}
        })
        .from(".featurestwo", {y: 200, opacity: 0},)
        .to(".featurestwo", {y: 0, opacity: 1})
        tl.current = gsap.timeline({
            scrollTrigger: {trigger: ".featuresthree", start: "top bottom"}
        })
        .from(".info", {y:100, opacity: 0},)
        .to(".info", {y:0, opacity: 1},)

    },app)
    return () => ctx.revert()
    

  }, [])

    return {app}
}

export default useAnimationTwo;