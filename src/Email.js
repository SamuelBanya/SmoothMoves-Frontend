import React from "react";

function Email() {
    function handleNameChange() {

    }

    function handleEmailChange() {

    }

    return (
        <div>
            <h2>Form</h2>
            <form>
                <div>
                    <label htmlFor="moverName"></label>
                    <input 
                        onChange={handleNameChange}
                    />
                    <label htmlFor="moverEmail"></label>
                    <input
                        onChange={handleEmailChange}
                    />
                </div>
                <br />
                <button className="emailButton" type="submit">Upload</button>
            </form>
        </div>
        )
}

export default Email;