import React from 'react'

const input = ({type,label}) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type= {type} name = {label}/>
        </div>
    )
}

export default input
