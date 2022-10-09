import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import ItemCard from "./ItemCard";

function ItemsForm({ moves, itemMoveSelectTagValue }) {
    const [itemAmount, setItemAmount] = useState(0);
  
    const handleItemSubmit = (e) => {
      e.preventDefault();
      console.log("handleItemSubmit() function called");
      setItemAmount(e.target[0].value);
    }

    // TODO: NOTE: This array idea is not working unfortunately:
    let totalItemFormData = [];

    // NOTE: This is my attempt to aggregate the form data from the multiple child 'ItemCard' components:
    function collectItemFormData(itemFormData) {
        console.log("collectItemFormData within parent ItemsForm component: ");
        console.log("itemFormData: ", itemFormData);
        // TODO: NOTE: This is only adding the SINGLE 'itemFormData' for a single 'ItemCard' child component's form data
        totalItemFormData.push(itemFormData);
        console.log("totalItemFormData from parent ItemsForm component: ", totalItemFormData);
    }

    const handleItemsCarouselFormSubmit = (e) => {
        console.log("handleItemsCarouselFormSubmit() function called");
        console.log("e: ", e);
        console.log("itemsCarouselArray: ", itemsCarouselArray);
        // NOTE: Use the existing 'moves' data, and index into it so that you can utilize 'itemMoveSelectTagValue' 
        // to make the appropriate fetch() request accordingly, and figure out how to create the appropriate fetch() request accordingly
        console.log("moves: ", moves);
        console.log("itemMoveSelectTagValue from child ItemsCarouselForm component: ", itemMoveSelectTagValue);
        // Make a 'GET' fetch() request to the '/moves/:id/items' API endpoint so that you can associate 'items' with a given 'move' instance:
        // post "/moves/:id/items" do 

        // NOTE: I have to loop through each of the amount of items in 'itemAmount' so that I can 
        // make a 'POST' request for each individual item accordingly:

        // TODO: I need to somehow get the individual data from each 'ItemCard' component in the form of an array of
        // 'itemFormData' objects that contain each specific item's data so that I can make individual POST 
        // requests accordingly:
        console.log("Test for loop within handleItemsCarouselFormSubmit before fetch() based POST request to create items for each 'move' instance: ")
        for (let i = 0; i < itemAmount; i++) {
            console.log("i: ", i);
            // fetch(`http://localhost:9292/${itemMoveSelectTagValue}/items`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json",
            //     },
            //     body: JSON.stringify()
            // })
            // .then((response) => response.json())
        }
    }

    // Create array to render items based carousel on screen:
    let itemsCarouselArray = [];

    // NOTE: This is where 'ItemCard' child component is being used for reference:
    for (let i = 0; i < itemAmount; i++) {
        itemsCarouselArray.push(<ItemCard key={i} id={i} collectItemFormData={collectItemFormData}/>)
    }

    console.log("itemsCarouselArray: ", itemsCarouselArray);

    return (
        <div>
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
            <Carousel interval={null}>
                {itemsCarouselArray}
            </Carousel>
            <br />
            <br />
            <br />
            { itemsCarouselArray.length > 0 ? <Button variant="contained" color="primary" type="submit" onClick={handleItemsCarouselFormSubmit}>Submit All Items</Button> : null}
        </div>
    )
}

export default ItemsForm;