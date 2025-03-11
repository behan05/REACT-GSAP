import React, { useEffect, useRef } from 'react';
import styles from "../styles/about.module.css";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function About() {

  useEffect(() => {
    document.title = "About";
  },[]);

  const scrollTriggerCont = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      scrollTriggerCont.current,
      { xPercent: -100 }, // Start completely off-screen (left)
      {
        xPercent: 100, // Move completely off-screen (right)
        scrollTrigger: {
          trigger: scrollTriggerCont.current,
          start: "top 80%",
          end: "top 10%",
          pin: true,
          ease: "Power1",
          scrub: 1, // Smooth animation
          markers: true, // Debug markers (remove in production)
        },
      }
    );
  }, []);

  return (
    <>
      <div className={styles.container}></div>
      <h2 ref={scrollTriggerCont}>Hello World From React With GSAP</h2>
      <div className={styles.container}></div>
    </>

  )
}

export default About;