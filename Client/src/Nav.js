import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav() {

    return (
        <nav>
            <div><NavLink to="/">Home</NavLink></div>
            <div><NavLink to="inventory">Inventory</NavLink></div>
            <div><NavLink to="about">About</NavLink> </div>
            <div><NavLink to="contact">Contact</NavLink> </div>
        </nav>
    )
}

