import React,{useContext} from 'react'
import {withRouter} from "react-router-dom"
import ChatContext from "../../context/groupChat/groupChatContext";

const ChatNames = (props) => {
    const chatContext = useContext(ChatContext);
    const { setCurrentRoom } = chatContext;
    const {name,_id,email} = props.psych
    
    const onClick = (e) => {
        e.preventDefault();
        setCurrentRoom(e.target.id);
        props.history.push("/chat")
    }
    
    return (
        <div>
            <h3>{name}</h3>
            <button id = {email} onClick = {onClick}>Message</button>
            <input id={_id}></input> {/* its purpose less just to remove warning delete it */}
            
        </div>
    )
}

export default withRouter(ChatNames);
