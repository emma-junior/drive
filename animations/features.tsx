import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const useAnimationTwo= () => {
  
  let app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>()
  
  useEffect(() => {
    let featuretext = SplitType.create('.topic')


    let ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger: {trigger: ".featuresone", start: "top center"}
        })
        .from(".featuresone", {x: -200, opacity: 0},)
        .to(".featuresone", {x: 0, opacity: 1})
        tl.current = gsap.timeline({
            scrollTrigger: {trigger: ".featurestwo", start: "top center"}
        })
        .from(".featurestwo", {y: 200, opacity: 0},)
        .to(".featurestwo", {y: 0, opacity: 1})
        tl.current = gsap.timeline({
            scrollTrigger: {trigger: ".featuresthree", start: "top center"}
        })
        .from(".featuresthree", {x: 200, opacity: 0},)
        .to(".featuresthree", {x: 0, opacity: 1})
        .to(".topic", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },)
        .to(".char", { y: 0, stagger: 0.05, opacity: 1, delay:0.2, duration: .1 },)
        .from(".info", {y:100, opacity: 0},)
        .to(".info", {y:0, opacity: 1},)

    },app)
    return () => ctx.revert()
    

  }, [])

    return {app}
}

export default useAnimationTwo;