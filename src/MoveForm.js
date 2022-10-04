import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function MoveForm({handleMoveFormSubmit, formData, handleChange}) {

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
                            value={formData.pickupLocation}
                            onChange={handleChange}
                        />
                    </Grid>
                    <br />
                    <Grid item>
                        <TextField 
                            id="dropoffLocation"
                            name="dropoffLocation"
                            label='Dropoff Location (ex: "Orlando, FL")'
                            type="text"
                            value={formData.dropoffLocation}
                            onChange={handleChange}
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