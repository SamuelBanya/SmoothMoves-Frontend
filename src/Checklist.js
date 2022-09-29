import React, { useEffect, useState } from "react";

function Checklist() {
    // NOTE: I need to allow the user to pick 'which' move they would like to select from
    // This will be based upon the 'dropoff_location' since that makes the most sense
    // since the user will not know what the 'id' would be
    let [checklist, setChecklist] = useState([]);
    useEffect(() => {
        fetch("http://localhost/moves")
        .then(response => response.json())
        .then(data => {
            checklist = setChecklist(data);
        })
    }, [])

    // NOTE: Once you receive all of the moves from the '/moves' endpoint, 
    // You will need to then display them to the user using the ':dropoff_location' value itself
    // Ex: I would refer to a "Orlando, FL" to "Omaha, NE" move by literally just the ':dropoff_location'
    // values from the dropdown list itself

    return (
        <div></div>
        // { checklist.forEach(checklistItem => {
        //     console.log(checklistItem);
        // }) }
    )
}

export default Checklist;