import React from 'react'
import style from '../video.module.css'
import Buble from './Buble'

const Chat = () => {
    return (
        <div className={style.chat}>
            <div className={style.chatheader}>
            <i className = {` fa fa-arrow-left `}> </i>
            <p>Chat</p>
            <i className = {` fa fa-ellipsis-v `}> </i>
            </div>

            <div className={style.chatcon}>
                
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
                <Buble/>
            </div>

            <input placeholder = "Write your message..." className={style.smsinput} type="text" />
        </div>
    )
}

export default Chat
