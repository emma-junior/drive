import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useTeamAnimation = () => {
  let app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.saveStyles(".teamone, .teamtwo");

      tl.current = gsap
        .timeline({
          scrollTrigger: { trigger: ".teamone", start: "top bottom" },
        })
        .from(".teamone", { opacity: 0 })
        .to(".teamone", { opacity: 1, duration: 1 });

      tl.current = gsap
        .timeline({
          scrollTrigger: { trigger: ".teamtwo", start: "top bottom" },
        })
        .from(".teamtwo", { opacity: 0 })
        .to(".teamtwo", { opacity: 1, duration: 1 });

      tl.current = gsap
        .timeline({
          scrollTrigger: { trigger: ".features", start: "top bottom" },
        })
        .from(".features", { y: 100, opacity: 0 })
        .to(".features", { y: 0, opacity: 1 });
    }, app);

    return () => ctx.revert();
  }, []);

  return { app };
};

export default useTeamAnimation;
