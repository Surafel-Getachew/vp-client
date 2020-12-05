// import React, { useRef, useEffect, useState } from "react";
// import Peer from "peerjs";
// import io from "socket.io-client";
// const socket = io();
// // var peer = new Peer(undefined, {
// //   path: "/peerjs",
// //   host: "/",
// //   port: "5000",
// // });
// var peer = new Peer (undefined);
// const VideoTrial = () => {
//   const [myVideo, setMyVideo] = useState();
//   const myStream = useRef();
//   const othersStream = useRef();
//   useEffect(() => {
//     navigator.mediaDevices
//       .getUserMedia({
//         video: true,
//         audio: true,
//       })
//       .then((stream) => {
//         myStream.current.srcObject = stream;
//         myStream.current.muted = true;
//         peer.on("call", (call) => {
//           call.answer(stream);
//           myStream.current.srcObject = stream; //you can delete this for real
//           call.on("stream", (otherPepStream) => {
//             othersStream.current.srcObject = otherPepStream;
//           });
//         });
//         socket.on("user-connected", (userId) => {
//           console.log("inside useEffect");
//           var call = peer.call(userId, stream);
//           call.on("stream", (otherPepoStream) => {
//             othersStream.current.srcObject = otherPepoStream;
//           });
//         });
//       });
//     // eslint-disable-next-line
//   }, []);
//   // useEffect(() => {
//   //   navigator.mediaDevices
//   //     .getUserMedia({
//   //       video: true,
//   //       audio: true,
//   //     })
//   //     .then((stream) => {
//   //       setMyVideo(stream);
//   //       myStream.current.srcObject = stream;
//   //       myStream.current.muted = true;
//   //       peer.on("call", (call) => {
//   //         call.answer(stream);
//   //         myStream.current.srcObject = stream;
//   //         call.on("stream", (stream) => {
//   //           othersStream.current.srcObject = stream;
//   //         });
//   //       });
//   //       socket.on("uConnected", (id) => {
//   //         console.log("user connected inside useEffect");
//   //         var call = peer.call(id, stream);
//   //         call.on("stream", (otherPStream) => {
//   //           othersStream.current.srcObject = otherPStream;
//   //         });
//   //       });
//   //     });
//   //   // eslint-disable-next-line
//   // }, []);

//   // socket.on("user-connected", (id) => {
//   //   console.log("user connected outside of use effect");
//   // });

//   peer.on("open", (id) => {
//     socket.emit("join-room", "roomId", id);
//   });

//   return (
//     <div>
//       <h1>Video old</h1>
//       <div style={{ border: "1px solid red" }}>
//         <video ref={myStream} autoPlay></video>
//       </div>
//       <div style={{ border: "1px solid blue" }}>
//         <video ref={othersStream} autoPlay></video>
//       </div>
//     </div>
//   );
// };

// export default VideoTrial;
