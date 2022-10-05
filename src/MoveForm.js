import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

// TODO:
// Use 'onChange' for <Select> tag to then call a callback function back up to the parent 'App.js' component which will then pre-populate the 'Pickup Location' and
// 'Dropoff Location' in the 'Edit Existing Move' portion of the component:

function MoveForm({handleCreateMoveFormSubmit, createMoveFormData, handleCreateMoveChange, editMoveFormData, handleEditMoveChange, selectValues, handleSelectTagChange, selectTagValue, handleUpdateMove, handleDeleteMove}) {
    let menuItemsArray = selectValues.map(selectValue => <MenuItem key={selectValue["id"]} value={selectValue["id"]}>{selectValue["dropoff_location"]}</MenuItem> );

    return (
        <div>
            <h2>Create New Move</h2>
            <form onSubmit={handleCreateMoveFormSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField 
                            id="pickupLocation"
                            name="pickupLocation"
                            label='Pickup Location (ex: "New York, NY")'
                            type="text"
                            value={createMoveFormData.pickupLocation}
                            onChange={handleCreateMoveChange}
                        />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField 
                            id="dropoffLocation"
                            name="dropoffLocation"
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
                            id="pickupLocation"
                            name="pickupLocation"
                            label='Pickup Location (ex: "New York, NY")'
                            type="text"
                            value={editMoveFormData ? editMoveFormData.pickup_location : ""}
                            onChange={handleEditMoveChange}
                        />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField 
                            id="dropoffLocation"
                            name="dropoffLocation"
                            label='Dropoff Location (ex: "Orlando, FL")'
                            type="text"
                            value={editMoveFormData ? editMoveFormData.dropoff_location : ""}
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