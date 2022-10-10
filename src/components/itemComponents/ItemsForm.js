import React, { useState, useReducer } from "react";
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

    // TODO: Use the 'useReducer' hook to create a reduce to manage multiple state values into a single
    // function called a 'reducer' via these suggested steps:
    // 1. Call useReducer in the component that holds all of the carousel panels
    // 2. Pass its state and dispatch results into the carousel panels.
    // 3. Then, have the carousel panels update the reducer by calling dispatch.
    // 4. When the user is done, all of your state will have been populated in one place.

    // NOTE: This is my attempt to aggregate the form data from the multiple child 'ItemCard' components:
    function reducer(state, action) {
        switch (action.type) {
            case "changed_name": {
                return {
                    name: action.nextName,
                };
            }
            case "changed_length": {
                return {
                    name: action.nextLength,
                };
            }
            case "changed_width": {
                return {
                    name: action.nextWidth,
                };
            }
            case "changed_height": {
                return {
                    name: action.nextHeight,
                };
            }
            case "changed_weight": {
                return {
                    name: action.nextWeight,
                };
            }
        }
        throw Error("Unknown action: " + action.type);
    }
    // function collectItemFormData(itemFormData) {
    //     console.log("collectItemFormData within parent ItemsForm component: ");
    //     console.log("itemFormData: ", itemFormData);
    // }

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
        itemsCarouselArray.push(<ItemCard key={i} id={i} reducer={reducer} />)
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