import React, { useContext } from 'react'
import ChatContext from "../../context/groupChat/groupChatContext";

const DisplayMessage = () => {
    const chatContext = useContext(ChatContext);
    const {newMessage} = chatContext;
    return (
        <div>
            {newMessage}
        </div>
    )
}

export default DisplayMessage
