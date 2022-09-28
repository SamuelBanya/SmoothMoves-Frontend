import React, { useEffect, useState } from "react"

function Export() {
    const [moves, setMoves] = useState([]);
    const [fileExport, setFileExport] = useState([]);

    useEffect(() => {
        fetch("http://localhost:/moves")
        .then(response => response.json())
        .then(data => {
            setMoves(data);
        })
    }, [])

    return (
        <div>
            <h2>Export</h2>
            <form>
                <div>
                    <label htmlFor="specificMove">Choose A Move</label>
                    <select onChange={setFileExport} id="exportSelect" name="exportSelect">
                        {
                            // moves.forEach(move) => {
                            //     <option>{move}</option>
                            // }
                        }
                    </select>
                </div>
                <br />
                <button className="exportButton" type="submit">Export</button>
            </form>
        </div>
    )

}

export default Export;