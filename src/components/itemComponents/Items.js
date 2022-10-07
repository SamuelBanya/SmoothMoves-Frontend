import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import ChooseMoveForm from "./ChooseMoveForm";
import ItemsForm from "./ItemsForm";

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
        })
      }, []);

    let menuItemsArray = moves.map(move => <MenuItem key={move["id"]} value={move["id"]}>{move["dropoff_location"]}</MenuItem> );

    return (
        <div>
            <ChooseMoveForm menuItemsArray={menuItemsArray} />
            <ItemsForm />
        </div>
    )
}

export default Items;