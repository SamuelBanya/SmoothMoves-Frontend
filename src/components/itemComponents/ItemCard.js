import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ItemCard({ id, collectItemFormData }) {
    // TODO:
    // Biggest thing I need to figure out how to do is to aggregate every individual instance of the 
    // 'itemFormData' for each of these 'ItemCard' components within the parent 'ItemsForm' component
    // so that I can make the 'POST' requests accordingly:
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

        setItemFormData({
            ...itemFormData,
            [name]: value,
        });

        // TODO:
        // NOTE: I believe this is exactly where I need to call a callback function to the parent
        // to somehow aggregate the ItemCard child component instance's 'itemFormData'

        collectItemFormData(itemFormData);
        console.log("collectItemFormData() function called in child ItemCard component");
    }

    return (
        <div>
            <h2>Item # {id + 1}</h2>
            <Button variant="contained" color="primary" type="submit">Delete</Button>
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