import React, { useState, useEffect } from "react";

function Checklist({ moves, itemMoveSelectTagValue }) {
    // console.log("moves from Checklist child component: ", moves);
    // console.log("itemMoveSelectTagValue from Checklist child component: ", itemMoveSelectTagValue);
    // TODO: I need to do a fetch request given the specific 'itemMoveSelectTagValue' for the '/moves/:id/items' API endpoint that were created

    // TODO: I also need to create conditional rendering for the 'return' JSX statement that renders the entire 'Checklist' 
    // section ONLY if there are items present for that particular move that were submitted earlier:
    // const [items, setItems] = useState([]);

    let checklistItemsArray = [];

    useEffect(() => {
        console.log("itemMoveSelectTagValue from child Checklist component: ", itemMoveSelectTagValue);
        if (itemMoveSelectTagValue !== "") {
            fetch(`http://localhost:9292/moves/${itemMoveSelectTagValue}/items`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
            })
            .then((response) => response.json())
            .then((data) => {
                data.items.forEach((item) => {
                    checklistItemsArray.push(<li>{item}</li>)
                    console.log("\nCHECKING IN fetch(): ");
                    console.log("item: ", item);
                    console.log("data after fetch() in Checklist child component: ", data);
                    console.log("data.items after fetch() in Checklist child component: ", data.items);
                    console.log("checklistItemsArray in Checklist child component: ", checklistItemsArray);
                    console.log("checklistItemsArray.length in Checklist child component: ", checklistItemsArray.length);
                })
            })
        }
    }, [itemMoveSelectTagValue]);

    // NOTE: This is a problem since there are no '/moves/:id/items' data present:
    // console.log("CHECKING IN CHECKLIST FUNCTION: ");
    // console.log("checklistItemsArray in Checklist child component: ", checklistItemsArray);
    // console.log("checklistItemsArray.length in Checklist child component: ", checklistItemsArray.length);

    return (
        <div>
            <h2>Checklist</h2>
            { checklistItemsArray.length > 0 ? <h2>Checklist</h2> : <h2></h2> }
            { checklistItemsArray.length > 0 ? 
                <ul>
                    {checklistItemsArray}
                </ul>
                : <li></li>
            }
        </div>
    )
}

export default Checklist;