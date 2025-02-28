
// Some time more then two components need to used the same state (Data) so here we need to use concept called state lifting

import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"; // its library provide useGSAP hook.
import gsap from "gsap"; // core framework

gsap.registerPlugin(useGSAP);

function StateLifting({ text }) {

    const textRef = useRef(null);

    useGSAP(() => {
        gsap.from(textRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.3
        })
    })

    return (
        <div><span style={{ color: "red" }}>message:</span><h2 ref={textRef}> {text}</h2></div>
    )
}

export default StateLifting;