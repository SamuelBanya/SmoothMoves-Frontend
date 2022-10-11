import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Carousel from "react-material-ui-carousel";

function ChooseMoveForm({ menuItemsArray, handleItemMoveSelectTagChange, itemMoveSelectTagValue }) {
  
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
                        autoWidth
                    >
                        { menuItemsArray }
                    </Select>
                </FormControl>
            </form>
        </div>
    )
}

export default ChooseMoveForm;