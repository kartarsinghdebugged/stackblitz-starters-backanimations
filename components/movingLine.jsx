"use client"
import React, { useEffect,useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap-trial";
import Image from "next/image";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { SplitText } from "gsap-trial/SplitText";
import { useGSAP } from "@gsap/react";



const JoinUs = () => {

const introTitleRef6 = useRef(null);
  const marqueeGsapR = useRef(null);
  const marqueeContainerR = useRef(null);
  const introTextRef6 = useRef(null);
  // useLayoutEffect(() => {
  //   gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
  //   ScrollTrigger.saveStyles(".intro-title-6"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

  //   const introTitle6 = introTitleRef6.current;
  //   const splitText = new SplitText(introTitle6, { type: "lines", linesClass: "intro-title-6" });

  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: introTitle6,
  //       start: "top 100%",
  //       end: "top 10%", // Adjust the end position based on your needs
  //       once: true,
  //       markers: false,
  //     },
  //   });

  //   tl.from(splitText.lines, {
  //     opacity: 0,
  //     y: 200,
  //     x: 0,
  //     stagger: .1,
  //     duration: .4,
  //     ease: "power3.out",
  //   });

  //   // Cleanup function for ScrollTrigger
  //   return () => {
  //     tl.kill();
  //     splitText.revert();
  //   };
  // }, []);

  useGSAP(
    () => {
        gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-6"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle6 = introTitleRef6.current;
    const splitText = new SplitText(introTitle6, { type: "lines", linesClass: "intro-title-6" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle6,
        start: "top 100%",
        end: "top 10%", // Adjust the end position based on your needs
        once: true,
        markers: false,
      },
    });

    tl.from(splitText.lines, {
      opacity: 0,
      y: 200,
      x: 0,
      stagger: .1,
      duration: .4,
      ease: "power3.out",
    });


    },
    {
      scope: introTitleRef6,
    }
  )

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
  //   ScrollTrigger.saveStyles(".intro-text-6"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

  //   const introText6 = introTextRef6.current;
  //   const splitText = new SplitText(introText6, { type: "lines", linesClass: "intro-text-6" });

  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: introText6,
  //       start: "top 100%",
  //       end: "top 10%", // Adjust the end position based on your needs
  //       once: true,
  //       // markers: true,
  //     },
  //   });

  //   tl.from(splitText.lines, {
  //     opacity: 0,
  //     y: 200,
  //     x: 0,
  //     stagger: .1,
  //     duration: .4,
  //     ease: "power3.out",
  //   });

  //   // Cleanup function for ScrollTrigger
  //   return () => {
  //     tl.kill();
  //     splitText.revert();
  //   };
  // }, []);

  useGSAP(
    () => {
        gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-text-6"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introText6 = introTextRef6.current;
    const splitText = new SplitText(introText6, { type: "lines", linesClass: "intro-text-6" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introText6,
        start: "top 100%",
        end: "top 10%", // Adjust the end position based on your needs
        once: true,
        // markers: true,
      },
    });

    tl.from(splitText.lines, {
      opacity: 0,
      y: 200,
      x: 0,
      stagger: .1,
      duration: .4,
      ease: "power3.out",
    });

    },
    {
      scope: introTextRef6,
    }
  )
  
  // useLayoutEffect(() => {
  //   gsap.from(marqueeGsapR.current, {
  //     xPercent: 5,
  //     duration: 2,
  //   });
  //   gsap.to(marqueeGsapR.current, {
  //     xPercent: -50,
  //     scrollTrigger: {
  //       trigger: marqueeContainerR.current,
  //       start: 'top 70%',
  //       end: 'top 1%',
  //       scrub: 1,
  //       duration: 2,
  //       // markers: true
  //     },
  //   });
  // }, []);

  useGSAP(
    () => {
         gsap.from(marqueeGsapR.current, {
      xPercent: 5,
      duration: 2,
    });
    gsap.to(marqueeGsapR.current, {
      xPercent: -50,
      scrollTrigger: {
        trigger: marqueeContainerR.current,
        start: 'top 70%',
        end: 'top 1%',
        scrub: 1,
        duration: 2,
        // markers: true
      },
    });
    },
    {
      scope: marqueeGsapR,
    }
  )

  return(
    <>
    <div className="marquee-container fj-container desktop-view" ref={marqueeContainerR}>
    <h1 className="fj-h0 fj-dark fj-dark marquee-gsap fj-y-120" ref={marqueeGsapR}>
      Join us on a journey of radical discovery.
    </h1>
  </div>
  <div className="marquee-container  tab-mob-view">
  <div className='fj-container'>

    <h1 className="fj-h0 fj-dark fj-dark fj-y-120 ">
      Join us on a journey of radical discovery.
    </h1>
</div>
</div>
    </>
  )

}

export default JoinUs;