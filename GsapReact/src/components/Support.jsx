import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/support.css";

const Support = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      locoScroll.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div ref={containerRef} className="smooth-scroll">
      <section className="section">Section 1</section>
      <section className="section">Section 2</section>
      <section className="section">Section 3</section>
    </div>
  );
};

export default Support;
