import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <ul>
                    <li><Link to = "/quizes">Quizes</Link></li>
                    <li><Link to = "/groupchat">Group Chat</Link></li>
                    <li><Link to = "/videochat">Video Chat</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Home;