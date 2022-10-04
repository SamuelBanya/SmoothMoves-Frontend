import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function MoveForm({handleMoveFormSubmit, moveFormData, handleMoveChange}) {
    console.log("\n\nmoveFormData sent down as props from App component to child MoveForm component: ")
    console.log("moveFormData: ", moveFormData)
    return (
        <div>
            <h2>Create New Move</h2>
            <form onSubmit={handleMoveFormSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField 
                            id="pickupLocation"
                            name="pickupLocation"
                            label='Pickup Location (ex: "New York, NY")'
                            type="text"
                            value={moveFormData.pickupLocation}
                            onChange={handleMoveChange}
                        />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField 
                            id="dropoffLocation"
                            name="dropoffLocation"
                            label='Dropoff Location (ex: "Orlando, FL")'
                            type="text"
                            value={moveFormData.dropoffLocation}
                            onChange={handleMoveChange}
                        />
                    </Grid>
                    <br />
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Grid>
            </form>
        </div>
        )
}

export default MoveForm;