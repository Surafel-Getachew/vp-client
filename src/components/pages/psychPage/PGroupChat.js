import React,{useContext,useState} from 'react';
import GroupChatContext from "../../../context/groupChat/groupChatContext";



const PGroupChat = () => {

    const groupChatContext = useContext(GroupChatContext);
    const {createRoom} = groupChatContext;
    
    const [room,setRoom] = useState({
        name:""
    });

    const onChange = (e) => {
        setRoom({[e.target.name]:e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        createRoom(room);
    }
    

    return (
        <div>
            <h4>Create Room</h4>
            <form onSubmit = {onSubmit}>
                <input type = "text" name = "name" onChange = {onChange} placeholder = "Room Name"/>
                <input type = "submit" value = "submit"/>
            </form>
        </div>
    )
}

export default PGroupChat
