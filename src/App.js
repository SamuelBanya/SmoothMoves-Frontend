import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./components/generalComponents/About";
import Moves from "./components/moveComponents/Moves";
import Items from "./components/itemComponents/Items";
import NavBar from "./components/generalComponents/NavBar";
import React, { useState, useEffect } from "react";

function App() {
  const [moves, setMoves] = useState([]);
  useEffect(() => {
      fetch("http://localhost:9292/moves", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        setMoves(data);
      })
    }, [moves]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/moves" 
          element={<Moves moves={moves} setMoves={setMoves}/>}
        />
        <Route path="/items" 
          element={<Items moves={moves}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
