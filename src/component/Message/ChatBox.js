import React,{useContext} from 'react';
import ChatContext from "../../context/groupChat/groupChatContext";

const ChatBox = () => {
    const chatContext = useContext(ChatContext);
    const {newMessage} = chatContext; 
    return (
        <div>
            {newMessage};
        </div>
    )
}

export default ChatBox;
