import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect"
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

function ItemCard({ id, itemFormData, handleItemFormChange}) {
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
                        type="string"
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