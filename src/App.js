import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./components/generalComponents/About";
import Moves from "./components/moveComponents/Moves";
import Items from "./components/itemComponents/Items";
import NavBar from "./components/generalComponents/NavBar";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/moves" 
          element={<Moves />}
        />
        <Route path="/items" 
          element={<Items />}
        />
      </Routes>
    </div>
  );
}

export default App;
