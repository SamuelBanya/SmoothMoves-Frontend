import React from "react";

function About() {
    return (
        <div>
            <h2>About Page</h2>
            <p>
                This web app is a Full Stack web application made with React, Ruby, and Sinatra to help assist a U.S. based person to move via a related inventory sheet, and checklist which can be exported and shared with potential movers.
            </p>
            <h2>Functions</h2>
            <p>Actions that the user should be able to do include the following: </p>
            <ul>
                <li>
                    The ability for the user to tell the web app the two locations involved in their move (pickup location and dropoff location) which will be hooked up to a map based API to show markers, and total distance required in miles.
                </li>
                <li>
                    The ability for the user to go through each inventory item to determine its height, width, length, and weight of each box or individual item.
                </li>
                <li>
                    The ability for the user once they are done with this process to be shown the same checklist so that they can check each item off one by one.
                </li>
                <li>
                    The ability to then export this same checklist within a separate route as an Excel spreadsheet (.'.csv', or '.xlsx') to provide to actual movers.
                </li>
                <li>
                    The user can also fill out a form to then generate an email to be sent to the given mover as well.
                </li>
            </ul>
        </div>
    )
}

export default About;