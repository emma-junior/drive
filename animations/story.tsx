import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const useAnimationo = () => {
  
  let appi = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>()
  
  useEffect(() => {
    let storytext = SplitType.create('.topic')


    let ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger: {trigger: ".storyone", start: "top center"}
        })
        .from(".storyone", {x: -200, opacity: 0},)
        .to(".storyone", {x: 0, opacity: 1})
        tl.current = gsap.timeline({
            scrollTrigger: {trigger: ".storytwo", start: "top center"}
        })
        .from(".storytwo", {y: 200, opacity: 0},)
        .to(".storytwo", {y: 0, opacity: 1})
        tl.current = gsap.timeline({
            scrollTrigger: {trigger: ".storythree", start: "top center"}
        })
        .from(".storythree", {x: 200, opacity: 0},)
        .to(".storythree", {x: 0, opacity: 1})
        .to(".topic", { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' },)
        .to(".char", { y: 0, stagger: 0.05, opacity: 1, delay:0.2, duration: .1 },)
        .from(".info", {y:100, opacity: 0},)
        .to(".info", {y:0, opacity: 1},)

    },appi)
    return () => ctx.revert()
    

  }, [])

    return {appi}
}

export default useAnimationo;