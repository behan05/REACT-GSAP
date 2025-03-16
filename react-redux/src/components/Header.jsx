import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import "../styles/header.css";

gsap.registerPlugin(useGSAP);

function Header() {

    const headerRef = useRef(null);

    useGSAP(() => {
        gsap.from(headerRef.current.querySelectorAll("a"), {
            opacity: 0,
            stagger: 0.3,
        });
    });

    return (
        <header>
            <h3>Your Logo</h3>
            <nav ref={headerRef}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active-list" : ""}>Home</NavLink>

                <NavLink to="/todo" className={({ isActive }) => isActive ? "active-list" : ""}>Todo</NavLink>

                <NavLink to="/form" className={({ isActive }) => isActive ? "active-list" : ""}>Form</NavLink>

                <NavLink to="/counter" className={({ isActive }) => isActive ? "active-list" : ""}>Counter</NavLink>
            </nav>
        </header>
    )
}

export default Header;