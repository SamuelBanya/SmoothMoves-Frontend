import React, { useState, useEffect } from "react";
import CreateMoveForm from "./CreateMoveForm";
import EditMoveForm from "./EditMoveForm";

function Moves({ moves, setMoves }) {
    return (
        <div>
            <CreateMoveForm />
            <EditMoveForm moves={moves} setMoves={setMoves} />
        </div>
    )
}

export default Moves;