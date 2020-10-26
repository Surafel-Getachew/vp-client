import React from "react";

const Avatar = ({profile}) => {
    return (
        <div>
            <img src={`data:image/png;base64,${profile}`} />
        </div>
    )
}

export default Avatar;