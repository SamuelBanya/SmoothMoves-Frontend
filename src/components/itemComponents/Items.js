import React from "react";
import ItemForm from "./ItemForm";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import ChooseMoveForm from "./ChooseMoveForm";
import CreateItemsForm from "./CreateItemsForm";
import ItemsCarouselForm from"./ItemsCarouselForm";

function Items() {
    const [itemMoveSelectValues, setItemMoveSelectValues] = useState([]);
    const [itemMoveSelectTagValue, setItemMoveSelectTagValue] = useState("");
    const [itemAmount, setItemAmount] = useState(0);
  
    const handleItemSubmit = (e) => {
      e.preventDefault();
      console.log("handleItemSubmit() function called");
      setItemAmount(e.target[0].value);
    }
  
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
            <CreateItemsForm handleItemSubmit={handleItemSubmit}/>
            <ItemsCarouselForm handleCarouselChange={handleCarouselChange}/>
        </div>
    )
}

export default Items;