import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import ItemCard from "./ItemCard";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
import { green, pink } from "@mui/material/colors";
import Box from "@mui/material/Box";

function ItemsForm({ moves, itemMoveSelectTagValue }) {
    const [itemAmount, setItemAmount] = useState(0);
  
    const handleItemSubmit = (e) => {
      e.preventDefault();
      setItemAmount(e.target[0].value);
    }

    const [totalItemsArray, setTotalItemsArray] = useState([]);

    function collectItemFormData(itemFormData) {
        let dataMatch = totalItemsArray.find((item) => item.item_id === itemFormData.item_id);
        if (dataMatch) {
            let newTotalItemsArray = totalItemsArray.map((item) => item.item_id === itemFormData.item_id ? itemFormData : item);
            setTotalItemsArray(newTotalItemsArray);
        }
        else {
            setTotalItemsArray([...totalItemsArray, itemFormData]);
        }
    }

    const [checklistVisible, setChecklistVisible] = useState(false);

    const handleItemsCarouselFormSubmit = (e) => {
        setChecklistVisible(!checklistVisible);
        console.log("handleItemsCarouselFormSubmit() function called");
        console.log("itemMoveSelectTagValue from child ItemsCarouselForm component: ", itemMoveSelectTagValue);
        console.log("totalItemsArray from handleItemsCarouselFormSubmit() function: ");
        console.log(totalItemsArray);
        console.log("Test for loop within handleItemsCarouselFormSubmit before fetch() based POST request to create items for each 'move' instance: ")

        // NOTE: Fetch request with a loop to send out individual POST requests:
        for (let i = 0; i < itemAmount; i++) {
            console.log("i: ", i);
            console.log("totalItemsArray[" + i + "]: ", totalItemsArray[i]);
            console.log("totalItemsArray[" + i + "].name: ", totalItemsArray[i].name);
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
        }
    }

    // CHECKLIST SPECIFIC PORTION:
    let renderedChecklistItems = [];

    // CHECKLIST TEST 
    let itemNames = totalItemsArray.map((totalItem) => totalItem.name)
    // console.log("itemNames in function: ", itemNames);
    renderedChecklistItems = itemNames.map((item) => {
        return (
            <FormControlLabel key={item} control={<Checkbox defaultChecked
                sx={{
                color: pink[800],
                '&.Mui-checked': {
                    color: pink[600],
                },
                }}
            />}
            label={item}/>
        )
    });

    // console.log("\nCHECKLIST TEST: ");
    // console.log("renderedChecklistItems: ", renderedChecklistItems);

    // Create array to render items based carousel on screen:
    let itemsCarouselArray = [];

    const allTheItems = [];
    // NOTE: This is where 'ItemCard' child component is being used for reference:
    for (let i = 0; i < itemAmount; i++) {
        itemsCarouselArray.push(<ItemCard key={i} id={i} collectItemFormData={collectItemFormData}/>)
        // NOTE: This pattern is for creating individual items ahead of time since they appear
        // on the page beforehand and are NOT unmounted:
        // allTheItems.push({
        //     item_id: i,
        //     name: "",
        //     length: 0, 
        //     width: 0,
        //     height: 0,
        //     weight: 0
        // });
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
            <Box display="flex" alignItems="center" justifyContent="center"><FormGroup>{checklistVisible ? renderedChecklistItems : null}</FormGroup></Box>
        </div>
    )
}

export default ItemsForm;