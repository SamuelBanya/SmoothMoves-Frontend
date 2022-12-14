import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function EditMoveForm({ moves, setMoves }) {
    // NOTE: This is to pass down the specific value of the given '<Select>' tag to render it properly:
    const [selectTagValue, setSelectTagValue] = useState("");
    // NOTE: This is to provide the specific element value so that the related 'pickupLocation' and 'dropoffLocation' values can be displayed properly
    // in the 'Edit Existing Move' section:
    // NOTE: This is to fill in data for the 'Edit Existing Move' form data when the '<Select>' tag is selected:
    const [editMoveFormData, setEditMoveFormData] = useState({
    pickup_location: "", 
    dropoff_location: ""
    });

    // NOTE: 'moveOptions' is the child component version of 'moves' so that I can manipulate what's present on the screen after an 'EDIT' or 'DELETE'
    // action has been made:
    const [moveOptions, setMoveOptions] = useState([]);

    useEffect(() => {
        setMoveOptions(moves);
    }, [moves]);

    let renderMovesArray = moveOptions.map(move => <MenuItem key={move["id"]} value={move["id"]}>{move["dropoff_location"]}</MenuItem> );

    const handleEditMoveChange = (e) => {
        setEditMoveFormData({...editMoveFormData, [e.target.name]: e.target.value});
    }

    const handleSelectTagChange = (e) => {
        setSelectTagValue(e.target.value);
        setEditMoveFormData(moves.find(element => element["id"] === e.target.value));
    }

    const handleUpdateMove = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9292/moves/${editMoveFormData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                },
            body: JSON.stringify({ "pickup_location": editMoveFormData["pickup_location"], "dropoff_location": editMoveFormData["dropoff_location"] }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("data: ", data);
            const newMoves = moves.map((move) => move.id === data.id ? data : move);
            setMoves(newMoves);
        })
    }

    const handleDeleteMove = (e) => {
        e.preventDefault();

        fetch(`http://localhost:9292/moves/${editMoveFormData.id}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => { 
            const filteredMoves = moves.filter((move) => move.id !== data.id ? data : move);
            setMoves(filteredMoves);
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
                        autoWidth
                    >
                        { renderMovesArray }
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