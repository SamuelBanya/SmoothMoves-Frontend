import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import ChooseMoveForm from "./ChooseMoveForm";
import ItemsForm from "./ItemsForm";

function Items({ moves }) {
    const [itemMoveSelectTagValue, setItemMoveSelectTagValue] = useState("");

    function handleItemMoveSelectTagChange(e) {
      console.log("handleItemMoveSelectTagChange() function called in parent Items component")
      console.log("e: ", e);
      console.log("e.target.value: ", e.target.value);
      setItemMoveSelectTagValue(e.target.value);
    }

    let menuItemsArray = moves.map(move => <MenuItem key={move["id"]} value={move["id"]}>{move["dropoff_location"]}</MenuItem> );

    return (
        <div>
            <ChooseMoveForm 
              menuItemsArray={menuItemsArray} handleItemMoveSelectTagChange={handleItemMoveSelectTagChange} itemMoveSelectTagValue={itemMoveSelectTagValue}
            />
            <ItemsForm moves={moves} itemMoveSelectTagValue={itemMoveSelectTagValue} />
        </div>
    )
}

export default Items;