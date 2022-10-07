import React from "react";
import CreateMoveForm from "./CreateMoveForm";
import EditMoveForm from "./EditMoveForm";

function Moves() {
    // const [toggle, setToggle] = useState(false);
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
          // setItemMoveSelectValues(data);
        })
      }, []);
    return (
        <div>
            <CreateMoveForm 
                handleCreateMoveFormSubmit={handleCreateMoveFormSubmit} createMoveFormData={createMoveFormData} handleCreateMoveChange={handleCreateMoveChange} 
            />
            <EditMoveForm 
                editMoveFormData={editMoveFormData} handleEditMoveChange={handleEditMoveChange} moves={moves} handleSelectTagChange={handleSelectTagChange} selectTagValue={selectTagValue} handleUpdateMove={handleUpdateMove} handleDeleteMove={handleDeleteMove}
            />
        </div>
    )
}

export default Moves;