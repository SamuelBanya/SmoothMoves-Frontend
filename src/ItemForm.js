import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// NOTE: I need to send down the amount of items to iterate through as props to this child component
function ItemForm() {
    const [formValues, setFormValues] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("e: ", e);
    }

    function chooseMove() {

    }

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


                // {
                //     items.map( (item, i) => <Item key={i} item={item}/>)
                // }

    return (
        <div>
            <h2>Select A Move: </h2>
            <form>
                <div>
                    <label htmlFor="specificMove">Choose A Move</label>
                    <select onChange={chooseMove} id="moveSelect" name="moveSelect">
                        {
                            // moves.forEach(move) => {
                            //     <option>{move}</option>
                            // }
                        }
                    </select>
                </div>
                <br />
                <button className="moveSelectButton" type="submit">Select</button>
            </form>
            // NOTE: I need to iterate through the amount of items
            // that the user wants to enter, and therefore ask
            // them the following details for each item:
            // Height, width, length (inches, later converted to square feet)
            // Weight (lbs, pounds)
            <h2>Items To Move</h2>
            <br />
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField 
                        id="itemAmount"
                        name="itemAmount"
                        label="Item Amount"
                        type="number"
                        value={formValues.itemAmount}
                        onChange={handleInputChange}
                    />
                </Grid>
                <br />
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </Grid>
        </div>
    )
}

export default ItemForm;