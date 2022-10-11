import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "../../index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const headerTheme = createTheme({
    typography: {
        fontFamily: "Orbitron, sans-serif",
        allVariants: {
            color: "yellow"
        },
    }
});

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: "#ff6600" }}position="static">
            <Toolbar>
                <IconButton>
                    <NavLink
                        className="NavLink"
                        to="/"
                    >
                        About
                    </NavLink>
                </IconButton>
                <IconButton>
                    <NavLink
                        className="NavLink"
                        to="/moves"
                    >
                        Move
                    </NavLink>
                </IconButton>
                <IconButton>
                    <NavLink
                        className="NavLink"
                        to="/items"
                    >
                        Items
                    </NavLink>
                </IconButton>
                <ThemeProvider theme={headerTheme}>
                    <Typography align="right" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        🌴 Smooth Moves 🚚
                    </Typography>
                </ThemeProvider>
            </Toolbar>
            </AppBar>
      </Box>
    )
}

export default NavBar;