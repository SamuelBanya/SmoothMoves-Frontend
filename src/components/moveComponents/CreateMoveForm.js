import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function CreateMoveForm({handleCreateMoveFormSubmit, createMoveFormData, handleCreateMoveChange})
{
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
        </div>
    )
}

export default CreateMoveForm;