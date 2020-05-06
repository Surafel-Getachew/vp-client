import React,{useContext,useEffect} from "react";
import GroupChatContext from "../../../context/groupChat/groupChatContext";
import GroupChatItems from "./components/GroupChatItems";
const GroupChat = () => {

    const groupChat  = useContext(GroupChatContext);
    const {loadRooms,rooms} = groupChat;

    useEffect(() => {
        loadRooms()
    },[])

    return (
        <div>
            <h4>Rooms you can join and have little heart to heart</h4>
            {rooms.map((room) => (
                <GroupChatItems rooms = {room} />
            ))}
        </div>
    )
}

export default GroupChat;