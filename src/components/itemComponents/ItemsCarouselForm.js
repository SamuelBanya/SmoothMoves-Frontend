import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";

function ItemsCarouselForm({ moves, itemAmount, itemMoveSelectTagValue }) {
    const [itemFormData, setItemFormData] = useState([]);

    function handleCarouselChange() {
        console.log("handleCarouselChange() function called");
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

    let itemsCarouselArray = [];

    for (let i = 0; i < itemAmount; i++) {
        console.log("i: ", i);
        itemsCarouselArray.push(<ItemCard key={i} id={i}/>)
    }

    console.log("itemsCarouselArray: ", itemsCarouselArray);

    return (
        <div>
            { itemsCarouselArray.length > 1 ? <h2>Enter Item Info</h2> : <h2></h2>}
            <Carousel interval={null} onChange={handleCarouselChange}>
                {itemsCarouselArray}
            </Carousel>
            <br />
            <br />
            <br />
            { itemsCarouselArray.length > 0 ? <Button variant="contained" color="primary" type="submit" onClick={handleItemsCarouselFormSubmit}>Submit All Items</Button> : null}
        </div>
    )
}

export default ItemsCarouselForm;