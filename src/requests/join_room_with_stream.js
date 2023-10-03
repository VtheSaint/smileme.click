// import EnxRtc from '../EnxRtc';

var VideoSize = {
    "HD": [320, 180, 1280, 720], 
    "SD": [320, 180, 640, 480],
    "LD": [80, 45, 640, 360]
};

var StreamOpt = {
        video: true,
        audio: true,
        data: true,
        videoSize: VideoSize.HD,
        attributes: { name: "XX" }
};

var reConnectOpt = {
   "allow_reconnect": true,
   "number_of_attempts": 3,
   "timeout_interval": 10000
}; 

export const localStream = (token) => {  return EnxRtc.joinRoom(token, StreamOpt, function (success, error) {
    if (error && error != null) {
        // Look for error.type and error.msg.name to handle Exception
        if(error.type == "media-access-denied") {
             // Media Media Inaccessibility
        }
        else {
            // Camara acces applied 
        }
    }
   
    if (success && success != null) { 
       room = success.room;
       if (room.waitRoom && room.me.role != "moderator") {
           // Wait for Moderator
       } else {
           remoteStreams = success.room.streams; 
       }
    }
},
reConnectOpt
)}
