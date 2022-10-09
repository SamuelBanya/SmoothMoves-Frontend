import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ItemsCarouselForm from "./ItemsCarouselForm";

function ItemsForm({ moves, itemMoveSelectTagValue }) {
    const [itemAmount, setItemAmount] = useState(0);
  
    const handleItemSubmit = (e) => {
      e.preventDefault();
      console.log("handleItemSubmit() function called");
      setItemAmount(e.target[0].value);
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
                    <Button variant="contained" color="primary" type="submit">Enter</Button>
                </Grid>
            </form>
            <ItemsCarouselForm moves={moves} itemAmount={itemAmount} itemMoveSelectTagValue={itemMoveSelectTagValue} />
        </div>
    )
}

export default ItemsForm;