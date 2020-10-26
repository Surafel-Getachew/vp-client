import React from 'react'
import style from '../video.module.css'


function Buble(props) {
    console.log(props.messages);
    return (
        <div className={style.buble}>
            
            <div className={style.header}>
                <span>Theodore</span>
                <span>12:23</span>
            </div>
            <p className={style.text}>{props.messages} </p>
        </div>
    )
}

export default Buble
