<template>
    <h1>At first, we please you to apply your camera access <br> <br> Status: {{ check }}</h1>
</template>

<script setup>
import { defineProps, toRefs, ref, watchEffect} from 'vue';



const props = defineProps({
    isActive: Boolean,
  });

let isActiveRef = toRefs(props).isActive;
let toggledOnce = ref(false)
let check = ref("")

let res = 
{
    "result": 0,
    "token": "eyJ0b2tlbklkIjoiNjUxYzA5ZDllM2U0Nzk5YWY5OTNhMDA1Iiwicm9vbU1ldGEiOnsiX2lkIjoiNjUxOTlhNjRkMmZhYTk2ZGVkOWE4NmQwIiwibmFtZSI6IkVuYWJsZXhSb29tIiwic2VydmljZV9pZCI6IjY1MTk4NTRiNTZjYjQzMDI5MGY4ZWZkYSIsIm93bmVyX3JlZiI6Inh5eiIsInNldHRpbmdzIjp7ImRlc2NyaXB0aW9uIjoiRGVzY3JpcHRpdmUgdGV4dCIsIm1vZGUiOiJncm91cCIsInNjaGVkdWxlZCI6ZmFsc2UsImFkaG9jIjpmYWxzZSwiZHVyYXRpb24iOiIzMCIsInBhcnRpY2lwYW50cyI6IjIiLCJhdXRvX3JlY29yZGluZyI6dHJ1ZSwic2NyZWVuX3NoYXJlIjp0cnVlLCJjYW52YXMiOmZhbHNlLCJtZWRpYV9jb25maWd1cmF0aW9uIjoiZGVmYXVsdCIsInF1YWxpdHkiOiJTRCIsIm1vZGVyYXRvcnMiOiIxIiwidmlld2VycyI6MCwiYWN0aXZlX3RhbGtlciI6dHJ1ZSwiZW5jcnlwdGlvbiI6ZmFsc2UsIndhdGVybWFyayI6ZmFsc2UsInNpbmdsZV9maWxlX3JlY29yZGluZyI6ZmFsc2UsIm1heF9hY3RpdmVfdGFsa2VycyI6MywibWVkaWFfem9uZSI6IlhYIn0sInNpcCI6eyJlbmFibGVkIjpmYWxzZX0sImRhdGEiOnsiY3VzdG9tX2tleSI6IiJ9LCJjcmVhdGVkIjoiMjAyMy0xMC0wMVQxNjoxMjoyMC4zNjRaIiwiZW5hYmxleENvbnRyb2xsZXJJZCI6IjBhNGI5NWM1LThjM2MtY2ExNC03NTFmLWNjY2FhNzcwMWMwYyJ9LCJob3N0Ijoic3MzLmVuYWJsZXguaW86NDQzIiwic2VjdXJlIjp0cnVlLCJsb2dJZCI6InFSdmtpaiIsImN1cnJlbnRSb29tTW9kZSI6Imdyb3VwIiwiZ2F0ZXdheSI6IiIsInNpZ25hdHVyZSI6Ik4yWmhZamt5Tnpkak9URm1NR1l5WWpFeE16SXhZVGd5WWpRME9ETmhNRGt6T1dObE1EWm1aZz09IiwiZGF0YSI6W10sImV2ZW50U2VydmVyIjp7InVybCI6ImVzLmVuYWJsZXguaW8ifX0="
}
// =================================================================
// var VideoSize = {
//      "HD": [320, 180, 1280, 720], 
//      "SD": [320, 180, 640, 480],
//      "LD": [80, 45, 640, 360]
// };

// var StreamOpt = {
//          video: true,
//          audio: true,
//          data: true,
//          videoSize: VideoSize.SD,
//          attributes: { name: "XX" }
// };

// var reConnectOpt = {
//     "allow_reconnect": true,
//     "number_of_attempts": 3,
//     "timeout_interval": 10000
// }; 
//   window.EnxRtc.joinRoom(res.token, StreamOpt, function (success, error) {
//      if (error && error != null) {
//          // Look for error.type and error.msg.name to handle Exception
//          if(error.type == "media-access-denied") {
//               // Media Media Inaccessibility
//               console.log("Сам не захотел подключаться ");
//          }
//          else {
//           console.log("проеб");
//           check.value = "failed"
//          }
//      }
    
//      if (success && success != null) { 
// 		room = success.room;
// 		if (room.waitRoom && room.me.role != "moderator") {
// 			// Wait for Moderator
// 		} else {
//       console.log("отлинчо!");
// 			remoteStreams = success.room.streams; 
// 		}
//      }
//  },
// //  reConnectOpt
// )

// =================================================================


// Test version 
watchEffect(async () => {
  if (isActiveRef.value && toggledOnce.value == false)  {
    
    try {
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
  window.EnxRtc.joinRoom(res.token, StreamOpt, function (success, error) {
     if (error && error != null) {
         // Look for error.type and error.msg.name to handle Exception
         if(error.type == "media-access-denied") {
              // Media Media Inaccessibility
              console.log("Сам не захотел подключаться ");
         }
         else {
          console.log("проеб");
          check.value = "failed"
         }
     }
    
     if (success && success != null) { 
		room = success.room;
		if (room.waitRoom && room.me.role != "moderator") {
			// Wait for Moderator
		} else {
      console.log("отлинчо!");
			remoteStreams = success.room.streams; 
		}
     }
 },
//  reConnectOpt
)
    }
    catch (e) {
      console.log(e);
    }
    // console.log(x);
  }
})


</script>