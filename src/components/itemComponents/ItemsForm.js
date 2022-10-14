import React, { useEffect, useState } from "react";
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

    const [totalItemsArray, setTotalItemsArray] = useState([]);

    function collectItemFormData(itemFormData) {
        // NOTE: I need to figure out how to specifically filter for the 'itemFormData' that 
        // matches the 'id' value to prevent duplicates:
        console.log("CHECKING collectItemFormData function");
        console.log("itemFormData: ", itemFormData);
        console.log("totalItemsArray: ", totalItemsArray);
        // NOTE: I need to use 'useState' AND 'useEffect' for this to be properly updated asynchronously
        // according to this StackOverflow post:
        // https://stackoverflow.com/questions/33088482/onchange-in-react-doesnt-capture-the-last-character-of-text

        // TODO:
        // NOTE: ONLY the first item in the form returns a blank result until you go back and add a value to the controlled
        // form, which needs to be fixed
        // NOTE: I think it's because of the very first time the 'useState' hook is called for 'itemFormData', it
        // is adding the default 'zeroed' values above from 'itemFormData' to the beginning of the list
        // NOTE: I think this is something to do with how 'totalItemsArray' is being updated for the VERY first
        // item
        console.log("Using .find() in collectItemFormData() function: ");
        let dataMatch = totalItemsArray.find((item) => item.item_id === itemFormData.item_id);
        console.log("dataMatch: ", dataMatch);
        console.log("itemFormData.item_id: ", itemFormData.item_id);
        if (dataMatch) {
            let newTotalItemsArray = totalItemsArray.map((item) => item.item_id === itemFormData.item_id ? itemFormData : item);
            setTotalItemsArray(newTotalItemsArray);
            console.log("After If condition:");
            console.log("dataMatch: ", dataMatch);
            console.log("totalItemsArray: ", totalItemsArray);
        }
        else {
            setTotalItemsArray([...totalItemsArray, itemFormData]);
            console.log("After Else condition:");
            console.log("totalItemsArray: ", totalItemsArray);
        }
    }

    // CHECKLIST SPECIFIC PORTION:
    let checklistItems = [];
    let renderedChecklistItems = [];

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

        console.log("totalItemsArray from handleItemsCarouselFormSubmit() function: ");
        console.log(totalItemsArray);

        console.log("Test for loop within handleItemsCarouselFormSubmit before fetch() based POST request to create items for each 'move' instance: ")
        for (let i = 0; i < itemAmount; i++) {
            console.log("i: ", i);
            console.log("totalItemsArray[" + i + "]: ", totalItemsArray[i]);
            // console.log("Adding totalItemsArray[", i, "].name: ", totalItemsArray[i].name, " to renderedChecklistItems: ");
            // renderedChecklistItems.push(totalItemsArray[i].name);
            // console.log("renderedChecklistItems: ", renderedChecklistItems);
            fetch(`http://localhost:9292/moves/${itemMoveSelectTagValue}/items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                // NOTE: This is just to test if I am able to even make an example 'POST' request to the
                // '/moves/:id/items' API endpoint on the backend:
                body: JSON.stringify({
                    name: totalItemsArray[i].name,
                    length: totalItemsArray[i].length,
                    width: totalItemsArray[i].width,
                    height: totalItemsArray[i].height,
                    weight: totalItemsArray[i].weight,

                })
            })
            .then((response) => response.json())
            // Make another fetch request to grab all the checklist items to display below:
            .then( 
                fetch(`http://localhost:9292/moves/${itemMoveSelectTagValue}/items`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("data.items aka all the checklist items: ", data.items);
                    data.items.forEach((item) => {
                        checklistItems.push(item.name);
                        console.log("checklistItems inside forEach loop after GET request: ", checklistItems);
                    })

                    // console.log("item.name: ", item.name);
                    // let listItem = <li>{item.name}</li>
                    // checklistItems.push(listItem);
                    // debugger;
                    // checklistItems.push(<li key={item.id}>item.name</li>);
                    // console.log("checklistItems at the end of each loop: ", checklistItems);

                    // Attempt using single variable to store entire list items:
                    // const checklistItems = () =>  (
                    //     <ul>
                    //         {
                    //             data.items.map((item) => (
                    //                 <li key={item.id}>{item.name}</li>
                    //             ))}
                    //     </ul>
                    // );
                })
            )
        }
    }

    // CHECKLIST TEST 
    renderedChecklistItems = checklistItems.map((item) => (
        <li>
            {item}
        </li>
    ));

    // TODO: Figure out why this isn't getting rendered properly:
    // console.log("\nCHECKLIST TEST: ");
    // console.log("renderedChecklistItems: ", renderedChecklistItems);
    // console.log("checklistItems: ", checklistItems);

    // useEffect(() => {
    //     console.log("checklistItems: ", checklistItems);
    // }); 

    // Create array to render items based carousel on screen:
    let itemsCarouselArray = [];

    // NOTE: This is where 'ItemCard' child component is being used for reference:
    for (let i = 0; i < itemAmount; i++) {
        itemsCarouselArray.push(<ItemCard key={i} id={i} collectItemFormData={collectItemFormData}/>)
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
                    fullHeightHover={false}
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
            { itemsCarouselArray.length > 0 ? <Button variant="contained" color="success" type="submit" onClick={handleItemsCarouselFormSubmit}>Submit Items For Checklist</Button> : null}
            <h2>Checklist</h2>
            <ul>{renderedChecklistItems}</ul>
        </div>
    )
}

export default ItemsForm;