import React,{useContext} from 'react';
import { withRouter } from "react-router-dom";
import GroupChatContext from "../../../../context/groupChat/groupChatContext";

const GroupChatItems = (props) => {

    const {name} = props.rooms;
    const groupChatContext = useContext(GroupChatContext);
    const {setCurrentRoom} = groupChatContext;

    const onClick = (e) => {
        setCurrentRoom(e.target.name);
        props.history.push("/chat")
    }

    return (
        <div>
            <button name = {name} onClick = {onClick}>{name}</button>
        </div>
    )
}

export default withRouter(GroupChatItems);
