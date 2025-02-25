import { useGSAP } from "@gsap/react"; // react hook use only in react provide some specific feature like automatically cleanup whan component unmount.

import gsap from 'gsap'; // core Gsap framwork its important to work with gsap animation.
import { useEffect, useRef } from 'react';

gsap.registerPlugin(useGSAP);

function Header({ logo }) {
    const animationRef = useRef(null); // return an object

    useEffect(() => {

        if (animationRef.current && !animationRef.current.querySelector(".support-item")) {
            const newLi = animationRef.current.appendChild(document.createElement("li"));
            newLi.className = "support-item";
            newLi.innerHTML = "SUPPORT";
        }

    }, []);

    useGSAP(() => {
        gsap.from(animationRef.current.querySelectorAll("li"), {
            opacity: 0,
            y: -20,
            stagger: 0.1,
        });
    })

    return (
        <header>
            <h2>{logo}</h2>
            <nav>
                <ul ref={animationRef}>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PROJECTS</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;