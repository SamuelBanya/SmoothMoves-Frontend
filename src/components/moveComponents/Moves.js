import React, { useState, useEffect } from "react";
import CreateMoveForm from "./CreateMoveForm";
import EditMoveForm from "./EditMoveForm";

function Moves() {
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
      }, [moves]);

    return (
        <div>
            <CreateMoveForm />
            <EditMoveForm moves={moves} setMoves={setMoves} />
        </div>
    )
}

export default Moves;