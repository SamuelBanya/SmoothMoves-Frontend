import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Carousel from "react-material-ui-carousel";
import ChooseMoveForm from "./ChooseMoveForm";
import CreateItemsForm from "./CreateItemsForm";
import ItemsCarouselForm from"./ItemsCarouselForm";

function Items() {
    const [moves, setMoves] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9292/moves", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        })
        .then((response) => response.json())
        .then((data) => {
          setMoves(data);
          // setItemMoveSelectValues(data);
        })
      }, []);

    const [itemMoveSelectValues, setItemMoveSelectValues] = useState([]);
    const [itemMoveSelectTagValue, setItemMoveSelectTagValue] = useState("");
  
    function handleItemMoveSelectTagChange(e) {
      console.log("handleItemMoveSelectTagChange() function called in App parent component")
      console.log("e: ", e);
      console.log("e.target.value: ", e.target.value);
      setItemMoveSelectTagValue(e.target.value);
    }
  
    const handleCarouselChange = (e) => {
      console.log("handleCarouselChange() function called");
    }

    let menuItemsArray = moves.map(move => <MenuItem key={move["id"]} value={move["id"]}>{move["dropoff_location"]}</MenuItem> );

    return (
        <div>
            <ChooseMoveForm 
                itemMoveSelectTagValue={itemMoveSelectTagValue} handleItemMoveSelectTagChange={handleItemMoveSelectTagChange} 
                menuItemsArray={menuItemsArray}
            />
            <CreateItemsForm />
        </div>
    )
}

export default Items;