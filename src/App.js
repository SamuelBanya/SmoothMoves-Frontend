import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import About from "./About"
import MoveForm from "./MoveForm"
import ItemForm from "./ItemForm"
import Checklist from "./Checklist"
import Export from "./Export"
import Email from "./Email"
import NavBar from "./NavBar"
import React, {useState} from "react";

function App() {
  // const [moveList, setMoveList] = useState([{pickupLocation: "", dropoffLocation: ""}]);

  const [moveFormData, setMoveFormData] = useState({
    pickupLocation: "", 
    dropoffLocation: ""
  });

  console.log("moveFormData (from parent App component): ", moveFormData);

  const handleMoveChange = (e) => {
      // NOTE: This is the same as using obj2 = {...obj1, name: "Sam"}
      // This is because we are utilizing the existing data by using the spread operator:
      setMoveFormData({...moveFormData, [e.target.name]: e.target.value});
  };

  const handleMoveFormSubmit = (e) => {
    e.preventDefault();
    // NOTE: This is the single lin that is causing the issue I am having since I need to just create an individual move based object, not a list of them
    // setMoveList([moveFormData, ...moveList]);
    // setMoveFormData(moveFormData);
    console.log("moveFormData inside POST request: ", moveFormData);
    fetch("http://localhost:9292/moves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      // NOTE: I had to convert "pickupLocation" and "dropoffLocation" variables from the React frontend
      // to the "pickup_location", and "dropoff_location" Ruby backend variable names by using destructuring:

      // Related MDN reference:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
      body: JSON.stringify({ "pickup_location": moveFormData["pickupLocation"], "dropoff_location": moveFormData["dropoffLocation"] }),
    })
    .then((response) => response.json())
    .then((data) => { 
      console.log("data: ", data);
      // NOTE: This clears the form data upon each submission:
      // console.log("Clearing form...")
      // setMoveFormData({
      //     pickupLocation: "", 
      //     dropoffLocation: ""
      // });
    });
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/moves" element={<MoveForm handleMoveFormSubmit={handleMoveFormSubmit} moveFormData={moveFormData} handleMoveChange={handleMoveChange} />}/>
        <Route path="/items" element={<ItemForm />}/>
        <Route path="/checklist" element={<Checklist />}/>
        <Route path="/export" element={<Export />}/>
        <Route path="/email" element={<Email />}/>
      </Routes>
    </div>
  );
}

export default App;
