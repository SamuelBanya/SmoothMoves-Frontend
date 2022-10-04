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
  const [moveList, setMoveList] = useState([{pickupLocation: "", dropoffLocation: ""}]);

  const [formData, setFormData] = useState({
    pickupLocation: "", 
    dropoffLocation: ""
  });

  const handleChange = (e) => {
      // NOTE: This is the same as using obj2 = {...obj1, name: "Sam"}
      // This is because we are utilizing the existing data by using the spread operator:
      setFormData({...formData, [e.target.name]: e.target.value});
  };
  // fetch(("https://localhost:9292/moves"), {
  //     method: "POST",
  //     headers: {
  //         "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formValues),
  // });
  // .then((response) => response.json())
  // .then((data) => {
  //     console.log("data: ", data);
  // })

  const handleMoveFormSubmit = (e) => {
    e.preventDefault();
    setMoveList([formData, ...moveList]);
    // NOTE: This clears the form data upon each submission:
    setFormData({
        pickupLocation: "", 
        dropoffLocation: ""
    });
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/moves" element={<MoveForm />}/>
        <Route path="/items" element={<ItemForm />}/>
        <Route path="/checklist" element={<Checklist />}/>
        <Route path="/export" element={<Export />}/>
        <Route path="/email" element={<Email />}/>
      </Routes>
      <MoveForm handleMoveFormSubmit={handleMoveFormSubmit} formData={formData} handleChange={handleChange} />
    </div>
  );
}

export default App;
