import React, { useState } from 'react'
import Showbtn from "./ShowBtn";

function About({ title, children }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <section>
            <h3>{title}</h3>
            {
                isActive ? <><p>{children}</p></> : <Showbtn setIsActive={setIsActive} />
            }
        </section>
    )
}

export default About;