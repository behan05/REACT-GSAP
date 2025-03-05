import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./header.css";


function Header() {

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
            <nav style={nav}>
                <NavLink to="/" style={nav} className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>

                <NavLink to="/about" style={nav}>About</NavLink>
                <NavLink to="/dashboard" style={nav}>Dashboard</NavLink>
            </nav>
        </header >
    )
}

export default Header;