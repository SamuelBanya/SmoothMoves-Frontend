import React from "react";

function About() {
    return (
        <div>
            <h2>About Page</h2>
            <p>
                This is a Full Stack web app created with React for the frontend, and Ruby with Sinatra for the backend.
            </p>
            <p>
                This app aims to help assist a U.S. based person to move via a related inventory sheet, and checklist which can be exported and shared with potential movers.
            </p>
            <h2>Current Functions</h2>
            <ul>
                <li>
                    The ability for the user to list the two locations involved in their move ("pickup location" and "dropoff location") 
                </li>
                <li>
                    The ability for the user to go through each inventory item to determine its height, width, length, and weight of each box or individual item.
                </li>
                <li>
                    The ability for the user to be shown a related checklist of items so that they can check each item off one by one when they
                    are done with their move.
                </li>
            </ul>
            <h2>Roadmap Items</h2>
            <ul>
                <li>
                    The ability for the user to use a map based API to show markers, and the total distance required in miles.
                </li>
                <li>
                    The ability to then export this same checklist within a separate route as an Excel spreadsheet (.'.csv', or '.xlsx') to provide to
                    an actual moving company
                </li>
                <li>
                    The ability for a user to fill out a form to email the same moving company as well.
                </li>
            </ul>
        </div>
    )
}

export default About;