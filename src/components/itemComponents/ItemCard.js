import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ItemCard({ id, collectItemFormData }) {
    const [itemFormData, setItemFormData] = useState({
        name: "",
        length: 0, 
        width: 0,
        height: 0,
        weight: 0
    });

    function handleItemFormChange(e) {
        const name = e.target.name;
        let value = e.target.value;
        console.log("handleItemFormChange() function called in child ItemCard component: ")
        console.log("name: ", name);
        console.log("value: ", value);

        console.log('itemFormData: ', itemFormData);

        setItemFormData({
            ...itemFormData,
            [name]: value,
        });

        // TODO:
        // The quicker and dirtier way to handle this would be to just use some kind of callback function
        // that would aggregate each 'ItemCard' instance's React controlled form data, 'itemFormData'

        // This is so that I could send all of this to the backend when the  'Submit All Items' button is
        // clicked within the 'ItemsForm' parent component

        // Also, this would have to ensure that the proper 'id' value of the specific item is being used
        // so that ONLY that item with that specific 'id' value is updated accordingly
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