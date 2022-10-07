import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function EditMoveForm({ moves }) {
    let menuItemsArray = moves.map(move => <MenuItem key={move["id"]} value={move["id"]}>{move["dropoff_location"]}</MenuItem> );
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

    return (
        <div>
            <h2>Edit Existing Move</h2>
            <form>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Dropoff Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="selectTag"
                        value={selectTagValue}
                        label="Select Dropoff Location"
                        onChange={handleSelectTagChange}
                    >
                        { menuItemsArray }
                    </Select>
                </FormControl>
                <br />
                <br />
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField 
                            id="edit_pickup_location"
                            name="pickup_location"
                            label='Pickup Location (ex: "New York, NY")'
                            type="text"
                            value={editMoveFormData.pickup_location}
                            onChange={handleEditMoveChange}
                        />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField 
                            id="edit_dropoff_location"
                            name="dropoff_location"
                            label='Dropoff Location (ex: "Orlando, FL")'
                            type="text"
                            value={editMoveFormData.dropoff_location}
                            onChange={handleEditMoveChange}
                        />
                    </Grid>
                    <br />
                    <Button onClick={handleUpdateMove} variant="contained" color="primary" type="submit">Update</Button>
                    <br />
                    <Button onClick={handleDeleteMove} variant="contained" color="primary" type="submit">Delete</Button>
                </Grid>
            </form>
        </div>
    )
}

export default EditMoveForm;