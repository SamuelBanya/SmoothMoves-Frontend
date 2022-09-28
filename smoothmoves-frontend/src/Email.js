import React from "react";

function Email() {
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
                    <input />
                </div>
                <br />
                <button className="uploadButton" type="submit">Upload</button>
            </form>
        </div>
        )

}

export default Email;