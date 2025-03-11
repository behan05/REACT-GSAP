import React, { useEffect, useRef } from 'react'
import "../styles/home.css";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {

  useEffect(() => {
    document.title = "Home";
  });

  const scrollTriggerConst = useRef(null);

  useGSAP(() => {
    gsap.from(scrollTriggerConst.current, {
      x: -300,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: scrollTriggerConst.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        markers: true,
        pin:true
      }
    })
  })


  return (
    <div className="container">
      <div className="leftBox" ref={scrollTriggerConst}>
        <img src="../../public/assets/images/img.jpg" alt="image of code tab" title='Warnning Do not Click on it' draggable="false" />
      </div>
      <div className="rightBox">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis quo quasi ipsa soluta eveniet odit, qui ipsum repellendus corporis asperiores quia, exercitationem repellat iste incidunt voluptatem, ea ducimus? <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum dolore voluptatum tempore adipisci, et quis provident alias vel iusto ullam iure vero culpa voluptatibus qui incidunt possimus facere impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis quo quasi ipsa soluta eveniet odit, qui ipsum repellendus corporis asperiores quia, exercitationem repellat iste incidunt voluptatem, ea ducimus? <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum dolore voluptatum tempore adipisci, et quis provident alias vel iusto ullam iure vero culpa voluptatibus qui incidunt possimus facere impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis quo quasi ipsa soluta eveniet odit, qui ipsum repellendus corporis asperiores quia, exercitationem repellat iste incidunt voluptatem, ea ducimus? <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum dolore voluptatum tempore adipisci, et quis provident alias vel iusto ullam iure vero culpa voluptatibus qui incidunt possimus facere impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis quo quasi ipsa soluta eveniet odit, qui ipsum repellendus corporis asperiores quia, exercitationem repellat iste incidunt voluptatem, ea ducimus? <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum dolore voluptatum tempore adipisci, et quis provident alias vel iusto ullam iure vero culpa voluptatibus qui incidunt possimus facere impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis quo quasi ipsa soluta eveniet odit, qui ipsum repellendus corporis asperiores quia, exercitationem repellat iste incidunt voluptatem, ea ducimus? <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum dolore voluptatum tempore adipisci, et quis provident alias vel iusto ullam iure vero culpa voluptatibus qui incidunt possimus facere impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis quo quasi ipsa soluta eveniet odit, qui ipsum repellendus corporis asperiores quia, exercitationem repellat iste incidunt voluptatem, ea ducimus? <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum dolore voluptatum tempore adipisci, et quis provident alias vel iusto ullam iure vero culpa voluptatibus qui incidunt possimus facere impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis quo quasi ipsa soluta eveniet odit, qui ipsum repellendus corporis asperiores quia, exercitationem repellat iste incidunt voluptatem, ea ducimus? <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum dolore voluptatum tempore adipisci, et quis provident alias vel iusto ullam iure vero culpa voluptatibus qui incidunt possimus facere impedit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis quo quasi ipsa soluta eveniet odit, qui ipsum repellendus corporis asperiores quia, exercitationem repellat iste incidunt voluptatem, ea ducimus? <br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum dolore voluptatum tempore adipisci, et quis provident alias vel iusto ullam iure vero culpa voluptatibus qui incidunt possimus facere impedit.</p>
      </div>
    </div>
  )
}

export default Home;