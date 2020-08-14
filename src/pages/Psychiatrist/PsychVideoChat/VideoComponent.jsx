import React from 'react'

const VideoComponent = ({stream}) => {
    return (
        <div className = "videoGrid">
            <video src = {stream} autoPlay></video>
        </div>
    )
}

export default VideoComponent
