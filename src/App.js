import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./components/generalComponents/About";
import MoveForm from "./components/moveComponents/MoveForm";
import NavBar from "./components/generalComponents/NavBar";
import React, { useState, useEffect } from "react";

function App() {
  // =============================================
  // MOVE COMPONENT SECTION:
  // =============================================
  // CREATE MOVE SECTION:
  const [createMoveFormData, setCreateMoveFormData] = useState({
    pickup_location: "", 
    dropoff_location: ""
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
      body: JSON.stringify({ "pickup_location": createMoveFormData["pickup_location"], "dropoff_location": createMoveFormData["dropoff_location"] }),
    })
    .then((response) => response.json())
  }
  // EDIT MOVE SECTION:
  // NOTE: This is to determine the values of the '<Select>' tags:
  // const [selectValues, setSelectValues] = useState([]);
  const [moves, setMoves] = useState([]);
  // NOTE: This is to pass down the specific value of the given '<Select>' tag to render it properly:
  const [selectTagValue, setSelectTagValue] = useState("");
  // NOTE: This is to provide the specific element value so that the related 'pickupLocation' and 'dropoffLocation' values can be displayed properly
  // in the 'Edit Existing Move' section:
  // NOTE: This is to fill in data for the 'Edit Existing Move' form data when the '<Select>' tag is selected:
  const [editMoveFormData, setEditMoveFormData] = useState({
    pickup_location: "", 
    dropoff_location: ""
  });

  const handleEditMoveChange = (e) => {
    console.log("handleEditMoveChange() function called in parent App component");
    setEditMoveFormData({...editMoveFormData, [e.target.name]: e.target.value});
  }

  // NOTE: A big part of this also depends upon the 'useEffect' section at the very bottom
  // since the useEffect() hook is using all the variables placed before it

  // NOTE: This is important to mention because the 'setMoves(data);' statement is
  // actually set during the useEffect() hook itself
  // Here, we are using 'selectTagValue' and 'setSelectTagValue' in tandem so that we can
  // determine the 'id' of the specific element we want to manipulate later for the 'EDIT' section:
  const handleSelectTagChange = (e) => {
    console.log("handleSelectTagChange() function called in App parent component")
    console.log("e: ", e);
    console.log("e.target.value: ", e.target.value);
    setSelectTagValue(e.target.value);
    // setToggle(!toggle);
    let pickupLocationTag = document.getElementById("#edit_pickup_location");
    console.log("pickupLocationTag: ", pickupLocationTag);
    setEditMoveFormData(moves.find(element => element["id"] === e.target.value));
  }

  const handleUpdateMove = (e) => {
    e.preventDefault();
    console.log("handleUpdateMove() function called");
    console.log("editMoveFormData: ")
    console.log(editMoveFormData ? editMoveFormData : "");
  }

  const handleDeleteMove = (e) => {
    e.preventDefault();
    console.log("handleDeleteMove() function called");
    console.log("editMoveFormData: ")
    console.log(editMoveFormData ? editMoveFormData : "");
    console.log("editMoveFormData.id: ")
    console.log(editMoveFormData ? editMoveFormData.id : "");

    fetch(`http://localhost:9292/moves/${editMoveFormData.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => { 
      console.log("data: ", data);
    });
  }

  // =============================================
  // USE EFFECT SECTION
  // =============================================
  // const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/moves" 
          element={<MoveForm 
            handleCreateMoveFormSubmit={handleCreateMoveFormSubmit} createMoveFormData={createMoveFormData} handleCreateMoveChange={handleCreateMoveChange} 
            editMoveFormData={editMoveFormData} handleEditMoveChange={handleEditMoveChange}
            moves={moves} handleSelectTagChange={handleSelectTagChange} selectTagValue={selectTagValue} handleUpdateMove={handleUpdateMove}
            handleDeleteMove={handleDeleteMove}
          />}
        />
        <Route path="/items" 
          element={<ItemForm 
            handleItemSubmit={handleItemSubmit} handleItemMoveSelectTagChange={handleItemMoveSelectTagChange} itemMoveSelectTagValue={itemMoveSelectTagValue} itemMoveSelectValues={itemMoveSelectValues} itemAmount={itemAmount} handleCarouselChange={handleCarouselChange}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
