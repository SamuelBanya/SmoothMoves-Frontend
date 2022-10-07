import React from "react";
import ItemCard from "./ItemCard";

function ItemsCarouselForm() {
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
            { itemsCarouselArray.length > 1 ? <Button variant="contained" color="primary" type="submit">Submit All Items</Button> : null}
        </div>
    )
}

export default ItemsCarouselForm;