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
      setItemAmount(e.target[0].value);
    }

    let totalItemArray = [];

    // TODO:
    // NOTE: The biggest issue is that even if I find an existing object containing 'itemFormData'
    // from that specific React controlled form within the array, it might have a duplicate 'name'
    // as another one --> 
    // Ex: Nothing is stopping the user from entering in 'box' for the 'name' value
    // for item 1 and item 2
    // MDN for .find()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    function collectItemFormData(itemFormData) {
        console.log("collectItemFormData within parent ItemsForm component: ");
        console.log("itemFormData: ", itemFormData);
        // TODO:
        // NOTE: This is causing the 'totalItemArray' to get blanked out each time it gets updated:
        totalItemArray.push(itemFormData);
        // NOTE: Possible line to maybe use, not sure:
        // setCreateMoveFormData({...createMoveFormData, [e.target.name]: e.target.value});
    }

    console.log("totalItemArray: ", totalItemArray);

    const handleItemsCarouselFormSubmit = (e) => {
        console.log("handleItemsCarouselFormSubmit() function called");
        console.log("e: ", e);
        console.log("itemsCarouselArray: ", itemsCarouselArray);

        itemsCarouselArray.forEach((itemsCarousel) => {
            console.log("itemsCarousel: ", itemsCarousel);
        })
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
            fetch(`http://localhost:9292/moves/${itemMoveSelectTagValue}/items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                // NOTE: This is just to test if I am able to even make an example 'POST' request to the
                // '/moves/:id/items' API endpoint on the backend:
                body: JSON.stringify({
                        name: "",
                        length: 0, 
                        width: 0,
                        height: 0,
                        weight: 0
                    })
            })
            .then((response) => response.json())
        }
    }

    // Create array to render items based carousel on screen:
    let itemsCarouselArray = [];

    // NOTE: This is where 'ItemCard' child component is being used for reference:
    for (let i = 0; i < itemAmount; i++) {
        itemsCarouselArray.push(<ItemCard key={i} id={i} collectItemFormData={collectItemFormData} />)
    }

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
                    <Button style={{ backgroundColor: "blueviolet" }} variant="contained" color="primary" type="submit">Enter</Button>
                </Grid>
            </form>
            { itemsCarouselArray.length > 0 ? <h2>Enter Item Info</h2> : <h2></h2>}
            { itemsCarouselArray.length > 0 ? 
                <Carousel 
                    navButtonsAlwaysVisible="true" interval={null}
                    navButtonsProps={{
                        style: {
                            backgroundColor: "blueviolet",
                            color: "white",
                            borderRadius: 50,
                        }
                    }}
                    >
                    {itemsCarouselArray}
                </Carousel> 
                : <h2></h2>}
            <br />
            <br />
            <br />
            { itemsCarouselArray.length > 0 ? <Button variant="contained" color="success" type="submit" onClick={handleItemsCarouselFormSubmit}>Submit All Items</Button> : null}
        </div>
    )
}

export default ItemsForm;