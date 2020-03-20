import React,{useContext,useEffect} from "react";
import {Link} from "react-router-dom"
import Article from "./Articles"

import AuthContext from "../../../context/auth/authContext";

const Home = ({title,body}) => {
    
    const authContext = useContext(AuthContext);
    const{loadUser,logout} = authContext;

   useEffect(() => {
        loadUser()
    },[])

    const onLogout = () => {
        logout()
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <ul>
                    <li><Link to = "/quizes">Quizes</Link></li>
                    <li><Link to = "/groupchat">Group Chat</Link></li>
                    <li><Link to = "/videochat">Video Chat</Link></li>
                    <li><Link to = "/articles">Articles</Link></li>
                    {/* <li><Link to = "/logout">Logout</Link></li> */}
                    <a onClick = {onLogout} href ="#!" >Logout</a>
                </ul>
            </div>

            <div>
                <Article/>
            </div>
        
        
        </div>
    )
}

export default Home;