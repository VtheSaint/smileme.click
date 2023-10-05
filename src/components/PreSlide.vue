<template>
      <div class="video-container">
      <video
        class="video"
        ref="vidRef"
        @click="play_pause"
        playsinline="true"
        preload="auto"
        type="video/mp4"
        @ended="togglePlay"
      >
      <source :src="url" type="video/mp4" />
      <source :src="m3u8_url" type="video/mp4" />
    </video>
    </div>
</template>

<script setup>
import { defineProps, toRefs, ref, watchEffect} from 'vue';
import {createToken} from '../requests/get_token'
import {createRoom} from '../requests/create_room'



const props = defineProps({
    isActive: Boolean,
    guid: String,
  });

let isActiveRef = toRefs(props).isActive;
let toggledOnce = ref(false)
let check = ref("")



const mp4_base_url = "https://vz-217da3db-313.b-cdn.net/"
const mp4_query = "/play_720p.mp4"
const base_url = "https://vz-217da3db-313.b-cdn.net/";
const query = "/playlist.m3u8";
const url = mp4_base_url + props.guid + mp4_query;
const m3u8_url = base_url + props.guid + query



 
const vidRef = ref(null); // Reference to the video element
  
  const play_pause = () => {
    const video = vidRef.value;
  if (video) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  }
  
  const togglePlay = () => {
    const video = vidRef.value;
    if (video) {
        video.play();
      }
  };

  const toggleStop = () => {
    const video = vidRef.value;
    if (video) {
      video.pause();
      }

  }


  watchEffect(() => {
  if (isActiveRef.value) {
    togglePlay(); // Play the video if isActiveRef is true
  } else {
    toggleStop(); // Pause the video if isActiveRef is false
  }
});



// Test version 
watchEffect(async () => {
  if (isActiveRef.value && toggledOnce.value == false)  {
    
      var VideoSize = {
     "HD": [320, 180, 1280, 720], 
     "SD": [320, 180, 640, 480],
     "LD": [80, 45, 640, 360]
};

var StreamOpt = {
         video: true,
         audio: true,
         data: true,
         videoSize: VideoSize.SD,
         attributes: { name: "XX" }
};

var reConnectOpt = {
    "allow_reconnect": true,
    "number_of_attempts": 3,
    "timeout_interval": 10000
}; 

// let res = 
// {
//     "result": 0,
//     "token": "eyJ0b2tlbklkIjoiNjUxZDYzOTBiYTMxNjFlYjIwZDBmNzI4Iiwicm9vbU1ldGEiOnsiX2lkIjoiNjUxZDMxZmFmMTQwNTc4NzQ3NDc1OWJlIiwibmFtZSI6IkVuYWJsZXhSb29tIiwic2VydmljZV9pZCI6IjY1MTk4NTRiNTZjYjQzMDI5MGY4ZWZkYSIsIm93bmVyX3JlZiI6Inh5eiIsInNldHRpbmdzIjp7ImRlc2NyaXB0aW9uIjoiRGVzY3JpcHRpdmUgdGV4dCIsIm1vZGUiOiJncm91cCIsInNjaGVkdWxlZCI6ZmFsc2UsImFkaG9jIjpmYWxzZSwiZHVyYXRpb24iOiIzMCIsInBhcnRpY2lwYW50cyI6IjIiLCJhdXRvX3JlY29yZGluZyI6dHJ1ZSwic2NyZWVuX3NoYXJlIjp0cnVlLCJjYW52YXMiOmZhbHNlLCJtZWRpYV9jb25maWd1cmF0aW9uIjoiZGVmYXVsdCIsInF1YWxpdHkiOiJTRCIsIm1vZGVyYXRvcnMiOiIxIiwidmlld2VycyI6MCwiYWN0aXZlX3RhbGtlciI6dHJ1ZSwiZW5jcnlwdGlvbiI6ZmFsc2UsIndhdGVybWFyayI6ZmFsc2UsInNpbmdsZV9maWxlX3JlY29yZGluZyI6ZmFsc2UsIm1heF9hY3RpdmVfdGFsa2VycyI6MywibWVkaWFfem9uZSI6IlhYIn0sInNpcCI6eyJlbmFibGVkIjpmYWxzZX0sImRhdGEiOnsiY3VzdG9tX2tleSI6IiJ9LCJjcmVhdGVkIjoiMjAyMy0xMC0wNFQwOTozNTo1NC4zNzFaIiwiZW5hYmxleENvbnRyb2xsZXJJZCI6ImIwNjI5MWNlLTA5ZWItNTZmMS1hZjdjLTRkNzQxNWFiMWZjOSIsImlzUm9vbUFjdGl2ZSI6ZmFsc2UsImhpc3RvcnkiOnsiYXZnX2hpc3RvcnlfdmFsdWUiOjEsImhpc3RvcnlfY291bnQiOjJ9fSwiaG9zdCI6InNzNC5lbmFibGV4LmlvOjQ0MyIsInNlY3VyZSI6dHJ1ZSwibG9nSWQiOiJ5WUQ3dDUiLCJjdXJyZW50Um9vbU1vZGUiOiJncm91cCIsImdhdGV3YXkiOiIiLCJzaWduYXR1cmUiOiJOV0U0WVRreE1tVmtZVGxsTUdaaFkyRXpObUZtWVdKa09UZzBaVE5qWWpFMU1XRmpOVFEyWkE9PSIsImRhdGEiOltdLCJldmVudFNlcnZlciI6eyJ1cmwiOiJlcy5lbmFibGV4LmlvIn19"
// }

  // =================================================================
// When server is active
// let room = await createRoom();
const res = await createRoom()
  .then(roomId => {
    // Обработка успешного создания комнаты (roomId доступен здесь)
    // console.log("Current room_id is "+roomId);
  const token_details = {
    "name": "User",
    "role": "moderator",
    "user_ref": "xyz",
    "roomId": roomId
  }

  createToken(token_details)
    .then(token => {
      // console.log("Current token is "+token)

      window.EnxRtc.joinRoom(token, StreamOpt, function (success, error) {
          if (error && error != null) {
              // Look for error.type and error.msg.name to handle Exception
              if(error.type == "media-access-denied") {
                    // Media Media Inaccessibility
                    // window.dataLayer = window.dataLayer || [];
                    // dataLayer.push({
                    //   'event': 'cameraAccess',
                    //   'cameraStatus': 'Denied'
                    // });
                    console.log("Запрет");
                    gtag('event', 'camera_permission_denied', {
                      'event_category': 'Camera Access',
                      'event_label': 'Denied'
                    });


              }
              else {
                // Some errors occured
                console.log("Token is " + res.token);
                console.log("проеб");
                check.value = "failed"
                // gtag('event', 'camera_permission_granted', {
                //   'event_category': 'Camera Access',
                //   'event_label': 'Granted'
                // });

              }
          }
          
          if (success && success != null) { 
          room = success.room;
          window.dataLayer = window.dataLayer || [];
          // dataLayer.push({
          //   'event': 'cameraAccess',
          //   'cameraStatus': 'Granted'
          // });
          ga('send', 'event', 'Camera Permission', 'Denied', 'User denied camera access');


          if (room.waitRoom && room.me.role != "moderator") {
            // Wait for Moderator
          } else {
            remoteStreams = success.room.streams; 
          }
          }
      },
      //  reConnectOpt
      )

      
    })
    .catch(error => {
      console.log(error);
    })
  })
  .catch(error => {
    // Обработка ошибки
    console.log(error);
  });


// =================================================================


}
})


function googleEvent() {
  window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'cameraAccess',
      'cameraStatus': 'Granted'
    });
}

</script>


<style scoped>
.video {
  height: 100%;
  width: 100%;
}
.video-container {
  height: 100%;
  width: 100%;
}
</style>