import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

// NOTE: I need to send down the amount of items to iterate through as props to this child component
function ItemForm({handleItemSubmit, handleItemMoveSelectTagChange, itemMoveSelectTagValue, itemMoveSelectValues, itemAmount, handleCarouselChange}) {
    let menuItemsArray = itemMoveSelectValues.map(selectValue => <MenuItem key={selectValue["id"]} value={selectValue["id"]}>{selectValue["dropoff_location"]}</MenuItem> );
    var items = [
        {
            name: "Side Table",
            owner: "Sam",
            length: "20",
            width: "80",
            height: "150",
            item_type: "loose"
        }
    ]

    console.log("itemAmount from ItemForm child component: ", itemAmount);

    // {
    //     items.map( (item, i) => <Item key={i} item={item}/>)
    // }

    // TODO:
    // Create 'Checklist' section
    // Create 'Email' section, which includes 'From' email, and 'To' email for moving company
    // Create 'Export' section to export the results to multiple file formats including Excel based '.xlsx' and '.csv' file formats

    let itemsCarouselArray = [];
    for (let i = 0; i < itemAmount; i++) {
        console.log("i: ", i);
        itemsCarouselArray.push(<Item key={i} id={i}/>)
    }
    console.log("itemsCarouselArray: ", itemsCarouselArray);

    return (
        <div>
            <h2>Choose Move</h2>
            <form>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Dropoff Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="itemMoveSelectTag"
                        value={itemMoveSelectTagValue}
                        label="Select Dropoff Location"
                        onChange={handleItemMoveSelectTagChange}
                    >
                        { menuItemsArray }
                    </Select>
                </FormControl>
            </form>
            <h2>Amount Of Items To Move</h2>
            <br />
            <form onSubmit={handleItemSubmit}>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField 
                            id="itemAmount"
                            name="itemAmount"
                            label="Item Amount"
                            type="number"
                        />
                    </Grid>
                    <br />
                    <Button variant="contained" color="primary" type="submit">Enter</Button>
                </Grid>
            </form>
            { itemsCarouselArray.length > 1 ? <h2>Enter Item Info</h2> : <h2></h2>}
            <Carousel interval={null} onChange={handleCarouselChange}>
                {itemsCarouselArray}
            </Carousel>
            <br />
            <br />
            <br />
            { itemsCarouselArray.length > 1 ? <Button variant="contained" color="primary" type="submit">Submit All Items</Button> : null}
            <h2>Checklist</h2>
            <p>This area will serve as the checklist of all items provided</p>
            <h2>Export</h2>
            <p>This will contain an export form so that the user can export the data to Excel formats (.xlsx and .csv)</p>
            <h2>Email</h2>
            <p>This will contain a form to email a given mover with the data that the user created</p>
        </div>
    )
}

export default ItemForm;