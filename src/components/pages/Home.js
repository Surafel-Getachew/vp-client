import React,{useContext,useEffect} from "react";
import {Link} from "react-router-dom"

import AuthContext from "../../context/auth/authContext";

const Home = () => {

    const authContext = useContext(AuthContext);
    const{loadUser} = authContext;


    useEffect(() => {
        loadUser()
    },[])

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <ul>
                    <li><Link to = "/quizes">Quizes</Link></li>
                    <li><Link to = "/groupchat">Group Chat</Link></li>
                    <li><Link to = "/videochat">Video Chat</Link></li>
                    <li><Link to = "/articles">Articles</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Home;