import React, {useState,useContext} from 'react'
import GroupChatContext from "../../context/groupChat/groupChatContext";
import DisplayMessage from "./DisplayMessage";

const ChatPage = () => {

    const [message, setMessage] = useState("");
    const groupChatContext = useContext(GroupChatContext);
    const { setCurrentMessage, currentRoom } = groupChatContext

    const onChange = (e) => {
        setMessage(e.target.value)
    }

    const messageInfo = {
        text: message,
        room: currentRoom
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setCurrentMessage(messageInfo)
    }
    return (
        <div>
            <DisplayMessage/>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} name="message" value={message} placeholder="message..." />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default ChatPage
