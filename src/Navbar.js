import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const linkStyles = {
    display: "inline-block",
    width: "60px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#00fc8f",
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  };

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