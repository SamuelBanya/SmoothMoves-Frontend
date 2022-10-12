import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ItemCard({ id, collectItemFormData }) {
    const [itemFormData, setItemFormData] = useState({
        // NOTE: Added an 'id' value to distinguish each 'ItemCard' instance from each other:
        name: "",
        length: 0, 
        width: 0,
        height: 0,
        weight: 0
    });

    function handleItemFormChange(e) {
        const name = e.target.name;
        let value = e.target.value;

        setItemFormData({
            ...itemFormData,
            [name]: value,
            // NOTE: Here we are using the 'id' value so that we can identify this formData to update accordingly
            // when we aggregate the data in the parent ItemsForm component:
            // NOTE: This is showing up as the value itself, so I'm not sure how I can create a new 'item_id'
            // key itself
            [id]: id
        });

        // NOTE: This ie being used to aggregate all of the 'itemFormData' from all child ItemCard components:
        collectItemFormData(itemFormData)
    }

    return (
        <div>
            <h2>Item # {id + 1}</h2>
            <Button variant="contained" color="error" type="submit">Delete</Button>
            <br />
            <br />
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField 
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        onChange={handleItemFormChange}
                        value={itemFormData.name}
                    />
                </Grid>
                <br />
                <Grid item>
                    <TextField 
                        id="length"
                        name="length"
                        label="Length (in.)"
                        type="number"
                        onChange={handleItemFormChange}
                        value={itemFormData.length}
                    />
                </Grid>
                <br />
                <Grid item>
                    <TextField 
                        id="width"
                        name="width"
                        label="Width (in.)"
                        type="number"
                        onChange={handleItemFormChange}
                        value={itemFormData.width}
                    />
                </Grid>
                <br />
                <Grid item>
                    <TextField 
                        id="height"
                        name="height"
                        label="Height (in.)"
                        type="number"
                        onChange={handleItemFormChange}
                        value={itemFormData.height}
                    />
                </Grid>
                <br />
                <Grid item>
                    <TextField 
                        id="weight"
                        name="weight"
                        label="Weight (lbs.)"
                        type="number"
                        onChange={handleItemFormChange}
                        value={itemFormData.weight}
                    />
                </Grid>
                <br />
            </Grid>
        </div>
    )
}

export default ItemCard;