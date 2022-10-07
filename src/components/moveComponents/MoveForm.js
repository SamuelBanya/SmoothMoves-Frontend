import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function MoveForm({handleCreateMoveFormSubmit, createMoveFormData, handleCreateMoveChange, editMoveFormData, handleEditMoveChange, moves, handleSelectTagChange, selectTagValue, handleUpdateMove, handleDeleteMove}) {
    let menuItemsArray = moves.map(move => <MenuItem key={move["id"]} value={move["id"]}>{move["dropoff_location"]}</MenuItem> );

    console.log("editMoveFormData from child MoveForm component to test 'Edit Existing Move' section: ", editMoveFormData);

    return (
        <div>
            <h2>Create New Move</h2>
            <form onSubmit={handleCreateMoveFormSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField 
                            id="pickup_location"
                            name="pickup_location"
                            label='Pickup Location (ex: "New York, NY")'
                            type="text"
                            value={createMoveFormData.pickupLocation}
                            onChange={handleCreateMoveChange}
                        />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField 
                            id="dropoff_location"
                            name="dropoff_location"
                            label='Dropoff Location (ex: "Orlando, FL")'
                            type="text"
                            value={createMoveFormData.dropoffLocation}
                            onChange={handleCreateMoveChange}
                        />
                    </Grid>
                    <br />
                    <Button variant="contained" color="primary" type="submit">Create</Button>
                </Grid>
            </form>
            <br />
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

export default MoveForm;