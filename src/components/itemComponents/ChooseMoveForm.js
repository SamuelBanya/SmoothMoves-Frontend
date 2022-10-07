import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Carousel from "react-material-ui-carousel";

function ChooseMoveForm({ menuItemsArray }) {

    const [itemMoveSelectTagValue, setItemMoveSelectTagValue] = useState("");
  
    function handleItemMoveSelectTagChange(e) {
      console.log("handleItemMoveSelectTagChange() function called in ChooseMoveForm child component")
      console.log("e: ", e);
      console.log("e.target.value: ", e.target.value);
      setItemMoveSelectTagValue(e.target.value);
    }
    return (
        <div>
            <h2>Choose Move</h2>
            <form>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Dropoff Location</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="itemMoveSelectTag"
                        value={itemMoveSelectTagValue}
                        label="Select Dropoff Location"
                        onChange={handleItemMoveSelectTagChange}
                    >
                        { menuItemsArray }
                    </Select>
                </FormControl>
            </form>
        </div>
    )
}

export default ChooseMoveForm;