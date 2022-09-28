import React, { useState } from "react";

function Form() {
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropoffLocation, setDropoffLocation] = useState("");

    return (
        <div>
            <h2>Form</h2>
            <form>
                <div>
                    <label htmlFor="pickupLocation"></label>
                    <input />
                    <label htmlFor="dropoffLocation"></label>
                    <input />
                    // NOTE: I need to iterate through the amount of items
                    // that the user wants to enter, and therefore ask
                    // them the following details for each item:
                    // Height, width, length (inches, later converted to square feet)
                    // Weight (lbs, pounds)
                    <label htmlFor="itemAmount"></label>
                    <input type="number" min="0"/>
                    // TODO: For the 'multiple forms in a single page' idea, use the 'carosel' option
                </div>
                <br />
                <button className="uploadButton" type="submit">Upload</button>
            </form>
        </div>
        )
}

export default Form;