import React from "react";
import ItemCard from "./ItemCard";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";

function ItemsCarouselForm({ itemAmount }) {
    function handleCarouselChange() {
        console.log("handleCarouselChange() function called");
    }

    const handleItemsCarouselFormSubmit = (e) => {
        console.log("handleItemsCarouselFormSubmit() function called");
        console.log("e: ", e);
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
            { itemsCarouselArray.length > 1 ? <Button variant="contained" color="primary" type="submit" onClick={handleItemsCarouselFormSubmit}>Submit All Items</Button> : null}
        </div>
    )
}

export default ItemsCarouselForm;