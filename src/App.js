import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import About from "./About"
import MoveForm from "./MoveForm"
import ItemForm from "./ItemForm"
import NavBar from "./NavBar"
import React, { useState, useEffect } from "react";

function App() {
  // CREATE SECTION:
  const [createMoveFormData, setCreateMoveFormData] = useState({
    pickupLocation: "", 
    dropoffLocation: ""
  });

  const handleCreateMoveChange = (e) => {
      // NOTE: This is the same as using obj2 = {...obj1, name: "Sam"}
      // This is because we are utilizing the existing data by using the spread operator:
      setCreateMoveFormData({...createMoveFormData, [e.target.name]: e.target.value});
  };

  const handleCreateMoveFormSubmit = (e) => {
    e.preventDefault();
    console.log("createMoveFormData inside POST request: ", createMoveFormData);
    fetch("http://localhost:9292/moves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ "pickup_location": createMoveFormData["pickupLocation"], "dropoff_location": createMoveFormData["dropoffLocation"] }),
    })
    .then((response) => response.json())
    .then((data) => { 
      // NOTE: This clears the form data upon each submission:
      // console.log("Clearing form...")
      // setMoveFormData({
      //     pickupLocation: "", 
      //     dropoffLocation: ""
      // });
    });
  }
  // EDIT SECTION:
  // NOTE: This is to determine the values of the '<Select>' tags:
  const [selectValues, setSelectValues] = useState([]);
  // NOTE: This is to pass down the specific value of the given '<Select>' tag to render it properly:
  const [selectTagValue, setSelectTagValue] = useState("");
  // NOTE: This is to provide the specific element value so that the related 'pickupLocation' and 'dropoffLocation' values can be displayed properly
  // in the 'Edit Existing Move' section:
  // NOTE: This is to fill in data for the 'Edit Existing Move' form data when the '<Select>' tag is selected:
  const [editMoveFormData, setEditMoveFormData] = useState({
    pickupLocation: "", 
    dropoffLocation: ""
  });

  const handleEditMoveChange = (e) => {
    console.log("handleEditMoveChange() function called in parent App component");
    setEditMoveFormData({...editMoveFormData, [e.target.name]: e.target.value});
  }

  const handleEditMoveFormSubmit = (e) => {
  }

  const handleSelectTagChange = (e) => {
    console.log("handleSelectTagChange() function called in App parent component")
    console.log("e: ", e);
    console.log("e.target.value: ", e.target.value);
    setSelectTagValue(e.target.value);
  }

  // ITEM SECTION:
  const [itemMoveSelectValues, setItemMoveSelectValues] = useState([]);
  const [itemMoveSelectTagValue, setItemMoveSelectTagValue] = useState("");

  function handleItemMoveSubmit() {
  }

  function handleItemMoveSelectTagChange(e) {
    console.log("handleItemMoveSelectTagChange() function called in App parent component")
    console.log("e: ", e);
    console.log("e.target.value: ", e.target.value);
    setItemMoveSelectTagValue(e.target.value);
  }

  // USE EFFECT SECTION FOR ALL SECTIONS:
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
      setSelectValues(data);
      setItemMoveSelectValues(data);
    })
  }, []);

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
      setEditMoveFormData(data.find(element => element["id"] === selectTagValue));
    })
  });

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/moves" 
          element={<MoveForm 
            handleCreateMoveFormSubmit={handleCreateMoveFormSubmit} createMoveFormData={createMoveFormData} handleCreateMoveChange={handleCreateMoveChange} 
            handleEditMoveFormSubmit={handleEditMoveFormSubmit} editMoveFormData={editMoveFormData} handleEditMoveChange={handleEditMoveChange}
            selectValues={selectValues} handleSelectTagChange={handleSelectTagChange} selectTagValue={selectTagValue} 
          />}
        />
        <Route path="/items" 
          element={<ItemForm 
            handleItemMoveSubmit={handleItemMoveSubmit} handleItemMoveSelectTagChange={handleItemMoveSelectTagChange} itemMoveSelectTagValue={itemMoveSelectTagValue} itemMoveSelectValues={itemMoveSelectValues}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
