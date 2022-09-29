import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Form() {
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
            <h2>Form</h2>
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
                    // NOTE: I need to iterate through the amount of items
                    // that the user wants to enter, and therefore ask
                    // them the following details for each item:
                    // Height, width, length (inches, later converted to square feet)
                    // Weight (lbs, pounds)
                    <Grid item>
                        <TextField 
                            id="itemAmount"
                            name="itemAmount"
                            label="Item Amount"
                            type="number"
                            value={formValues.itemAmount}
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

export default Form;