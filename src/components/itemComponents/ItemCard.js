import React, { useState, useReducer } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ItemCard({ id, reducer }) {
    // TODO:
    // Biggest thing I need to figure out how to do is to aggregate every individual instance of the 
    // 'itemFormData' for each of these 'ItemCard' components within the parent 'ItemsForm' component
    // so that I can make the 'POST' requests accordingly:

    // NOTE: The quicker and dirtier way to handle this would be to just use some kind of callback function
    // that would aggregate each and every 'ItemCard' instance into an array of objects, each of which
    // would get updated individually

    // NOTE: This is my attempt to use the 'useReducer()' React hook in this scenario, which I have no idea
    // how to actually use in this scenario:
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        length: 0, 
        width: 0,
        height: 0,
        weight: 0
    })

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

        dispatch({ 
            type: "changed_name",
            nextName: e.target.value
        });

        dispatch({ 
            type: "changed_length",
            nextName: e.target.value
        });

        dispatch({ 
            type: "changed_width",
            nextName: e.target.value
        });

        dispatch({ 
            type: "changed_height",
            nextName: e.target.value
        });

        dispatch({ 
            type: "changed_weight",
            nextName: e.target.value
        });
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