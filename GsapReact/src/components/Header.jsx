import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/header.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function Header() {

    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current.querySelectorAll("a"), {
            y: "-50px",
            opacity: 0,
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.out",
        });
    }, { dependencies: [navRef] });

    return (
        <header>
            <h3>logo</h3>
            <nav ref={navRef}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ''}>HOME</NavLink>

                <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ''}>ABOUT</NavLink>

                <NavLink to="/profile" className={({ isActive }) => isActive ? "active-link" : ''}>PROFILE</NavLink>

                <NavLink to="/support" className={({ isActive }) => isActive ? "active-link" : ''}>SUPPORT</NavLink>
            </nav>
        </header>
    )
}

export default Header;