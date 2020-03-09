import React from "react";
import {Link} from "react-router-dom";

const Phome = () => {
    return (
        <div>
            <ul>
                <li><Link to = "/psychiatrist/article">Article</Link></li>
                <li><Link to = "/psychiatrist/groupchat">GroupChat</Link></li>
                <li><Link to = "/psychiatrist/videochat">VideoChat</Link></li>
                <li><Link to = "/psychiatrist/profile">Profile</Link></li>
            </ul>
        </div>
    )
}

export default Phome