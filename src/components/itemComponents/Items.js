import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import ChooseMoveForm from "./ChooseMoveForm";
import ItemsForm from "./ItemsForm";

function Items() {
    // NOTE: This is kept at the parent 'Items.js' component level so that I can later pass down items to other components more easily
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
        })
      }, []);

    const [itemMoveSelectTagValue, setItemMoveSelectTagValue] = useState("");

    function handleItemMoveSelectTagChange(e) {
      console.log("handleItemMoveSelectTagChange() function called in ChooseMoveForm child component")
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
            <ItemsForm itemMoveSelectTagValue={itemMoveSelectTagValue} />
        </div>
    )
}

export default Items;