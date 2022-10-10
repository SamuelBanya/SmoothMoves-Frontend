import React from "react";

function Checklist({ moves, itemMoveSelectTagValue }) {
    // console.log("moves from Checklist child component: ", moves);
    // console.log("itemMoveSelectTagValue from Checklist child component: ", itemMoveSelectTagValue);
    // TODO: I need to do a fetch request given the specific 'itemMoveSelectTagValue' for the '/moves/:id/items' API endpoint that were created

    // TODO: I also need to create conditional rendering for the 'return' JSX statement that renders the entire 'Checklist' 
    // section ONLY if there are items present for that particular move that were submitted earlier:

    return (
        <h2>Checklist</h2>
    )
}

export default Checklist;