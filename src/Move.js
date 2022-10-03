import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Move() {
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropoffLocation, setDropoffLocation] = useState("");

    const [formValues, setFormValues] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("e: ", e);
    }

    return (
        <div>
            <h2>Move Form</h2>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField 
                            id="pickupLocation"
                            name="pickupLocation"
                            label='Pickup Location (ex: "New York, NY")'
                            type="text"
                            value={formValues.pickupLocation}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField 
                            id="dropoffLocation"
                            name="dropoffLocation"
                            label='Dropoff Location (ex: "Orlando, FL")'
                            type="text"
                            value={formValues.dropoffLocation}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <br />
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </Grid>
            </form>
        </div>
        )
}

export default Move;