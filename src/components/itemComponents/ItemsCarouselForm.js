import React, { useState } from "react";
import ItemCard from "./ItemCard";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";

function ItemsCarouselForm({ itemAmount, itemMoveSelectTagValue }) {
    const [itemFormData, setItemFormData] = useState([]);

    function handleCarouselChange() {
        console.log("handleCarouselChange() function called");
    }

    const handleItemsCarouselFormSubmit = (e) => {
        console.log("handleItemsCarouselFormSubmit() function called");
        console.log("e: ", e);
        console.log("itemsCarouselArray: ", itemsCarouselArray);
        console.log("itemMoveSelectTagValue from child ItemsCarouselForm component: ", itemMoveSelectTagValue);
        // Make a 'GET' fetch() request to the '/moves/:id' API endpoint so that you can determine
        // what items are associated with the current 'move' instance
        // Then, make a fetch() request to the "/moves/:id/items" endpoint
        // so that you can update the specific items associated with the 'move' instance accordingly
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