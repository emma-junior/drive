import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useAnimation = () => {
  let app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".countries",
            start: "top 95%",
            end: "bottom 5%",
            toggleActions: "restart none none reverse",
            scrub: 1,
          },
          defaults: {
            duration: 3,
            ease: "linear",
          },
        })
        .from(".countries_imageone", { y: 100 })
        .from(".countries_imagetwo", { y: -100 }, 0);
    }, app);

    return () => ctx.revert();
  }, []);

  return { app };
};

export default useAnimation;
