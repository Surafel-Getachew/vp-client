import React,{useEffect} from 'react'

const VideoComponent = ({stream}) => {
    const localVideo = React.createRef();
    useEffect(() => {
        if(localVideo.current) {
            localVideo.current.srcObject = stream;
        }
    },[stream,localVideo])
    return (
        <div>
            <video ref = {localVideo} autoPlay ></video>
        </div>
    )
}

export default VideoComponent

// style = {{width:"200px",height:"200px"}}