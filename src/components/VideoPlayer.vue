<template>
    <div class="video-container">
      <video
        class="video"
        autoplay
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
  import { defineProps, toRefs, ref, watchEffect } from 'vue';
  const props = defineProps({
    guid: String,
    isActive: Boolean,
  });


  const mp4_base_url = "https://vz-217da3db-313.b-cdn.net/"
  const mp4_query = "/play_720p.mp4"
  const base_url = "https://vz-217da3db-313.b-cdn.net/";
  const query = "/playlist.m3u8";
  const url = mp4_base_url + props.guid + mp4_query;
  const m3u8_url = base_url + props.guid + query
  
  const vidRef = ref(null); // Reference to the video element
  
  let isActiveRef = toRefs(props).isActive;
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
    togglePlay(); // Play the video if isActiveRef is true
  } else {
    toggleStop(); // Pause the video if isActiveRef is false
  }
});
toggleStop();
  
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
  