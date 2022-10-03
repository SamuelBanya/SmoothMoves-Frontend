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
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <MenuIcon />
                </IconButton>
                <IconButton>
                    <NavLink
                        to="/"
                    >
                        About
                    </NavLink>
                </IconButton>
                <IconButton>
                    <NavLink
                        to="/moves"
                    >
                        Move
                    </NavLink>
                </IconButton>
                <IconButton>
                    <NavLink
                        to="/items"
                    >
                        Items
                    </NavLink>
                </IconButton>
                <IconButton>
                    <NavLink
                        to="/checklist"
                    >
                        Checklist
                    </NavLink>
                </IconButton>
                <IconButton>
                    <NavLink
                        to="/email"
                    >
                        Email
                    </NavLink>
                </IconButton>
                <IconButton>
                    <NavLink
                        to="/export"
                    >
                        Export
                    </NavLink>
                </IconButton>
                <Typography align="right" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Smooth Moves
                </Typography>
            </Toolbar>
            </AppBar>
      </Box>
    )
}

export default NavBar;