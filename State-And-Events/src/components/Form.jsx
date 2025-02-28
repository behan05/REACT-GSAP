import React, { use, useRef, useState } from 'react';
import { useGSAP } from "@gsap/react"; // its library provide useGSAP hook.
import gsap from "gsap"; // core framework

gsap.registerPlugin(useGSAP);

function Form() {
    const [userName, setUserName] = useState("");
    const [number, setNumber] = useState(null);

    const textRef = useRef(null);

    function nameHandler(e) {
        setUserName(e.target.value);
    }

    function numberHandler(e) {
        setNumber(e.target.value);
    }

    useGSAP(() => {
        gsap.from(textRef.current, {
            y: -25,
            duration: 1.6,
            color: "blue",
            opacity: 0
        });
    });

    return (
        <>
            <h2 ref={textRef}>Hey there {userName} & your number is {number}</h2>

            <form method='GET'>
                <input type="text" value={userName} placeholder="please Enter name" onChange={nameHandler} />
                <input type="number" onChange={numberHandler} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;