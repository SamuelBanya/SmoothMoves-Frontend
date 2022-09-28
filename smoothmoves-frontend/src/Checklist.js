import React, { useEffect, useState } from "react";

function Checklist() {
    let [checklist, setChecklist] = useState([]);
    useEffect(() => {
        fetch("http://localhost/moves")
        .then(response => response.json())
        .then(data => {
            setChecklist(data);
        })
    }, [])

    return (
        { checklist.forEach(checklistItem => {
        }) }
    )
}

export default Checklist;