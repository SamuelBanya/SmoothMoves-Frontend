import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <h1>Smooth Moves</h1>
            <h2>A web app to help you move anywhere in the United States!</h2>
            <NavLink
                to="/"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}>
                    Move Form
            </NavLink>
            <NavLink
                to="/checklist"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}>
                    Checklist
            </NavLink>
            <NavLink
                to="/export"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}>
                    Export
            </NavLink>
            <NavLink
                to="/email"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}>
                    Email
            </NavLink>
            <NavLink
                to="/about"
                style={linkStyles}
                activeStyle={{ background: "darkblue" }}>
                    About
            </NavLink>
        </div>
    )
}

export default NavBar;