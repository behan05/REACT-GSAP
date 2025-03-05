import React, { useRef } from 'react';
import { Link, NavLink } from "react-router-dom";
import "./header.css";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function Header() {

    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current.querySelectorAll("a"), {
            y: "-20",
            opacity: 0,
            scale: 1.4,
            stagger: 0.3,
            color: "blue"
        });
    })

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        padding: "1rem",
        background: "#ccc",
        color: "#000"
    }

    const nav = {
        marginLeft: "1rem",
        color: "#000",
        textDecorator: "none"
    }

    return (
        <header style={style}>
            <h3>Company Logo</h3>

            <nav style={nav} ref={navRef}>
                <NavLink to="/" style={nav}>Home</NavLink>
                <NavLink to="/about" style={nav}>About</NavLink>
                <NavLink to="/dashboard" style={nav}>Dashboard</NavLink>
            </nav>
        </header >
    )
}

export default Header;