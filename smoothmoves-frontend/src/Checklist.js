import React, { useEffect, useState } from "react";

function Checklist() {
    let [checklist, setChecklist] = useState([]);
    useEffect(() => {
        fetch("http://localhost/moves")
        .then(response => response.json())
        .then(data => {
            checklist = setChecklist(data);
        })
    }, [])

    return (
        <div></div>
        // { checklist.forEach(checklistItem => {
        //     console.log(checklistItem);
        // }) }
    )
}

export default Checklist;