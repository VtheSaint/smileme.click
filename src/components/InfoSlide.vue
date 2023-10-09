<template>
    <div class="video-container">
        <video
            playsinline
            class="video"
            @click="play_pause"
            preload="auto"
            ref="vidRef"
            >
            <source src="https://vz-971b56fe-252.b-cdn.net/3b9b8e0e-a422-462b-968d-d6c0b0ef5ac0/play_720p.mp4" type="video/mp4" />
            <source src="https://vz-971b56fe-252.b-cdn.net/3b9b8e0e-a422-462b-968d-d6c0b0ef5ac0/playlist.m3u8" type="video/mp4" />
        </video>
        <!-- <button v-show="!is_playing" class="second-custom-button" @click="play_pause">
          ПУСК
        </button> -->
      <svg 
      @click="play_pause"
      v-show="visible"
      class="second-custom-button" fill="#8ed6f8" height="500px" width="500px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 60 60" xml:space="preserve">
      <g>
        <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
          c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
          C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
        <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
          S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
      </g>
      </svg>
        <button class="custom-button" @click="swiper.slideNext()">
            ПРОПУСТИТЬ
        </button>
    </div>
</template>



<script setup> 
import { defineProps, toRefs, ref, watchEffect } from 'vue';
import { useSwiper } from 'swiper/vue';

const props = defineProps({
isActive: Boolean,
});

const visible = ref(true)
const vidRef = ref(null); // Reference to the video element
let isActiveRef = toRefs(props).isActive;
let is_playing= ref(false)


const swiper = useSwiper();

const play_pause = () => {
    const video = vidRef.value;
  if (video) {
    if (video.paused) {
      visible.value = false
      video.play();
      is_playing.value = true
    } else {
      video.pause();
      is_playing.value = false
      visible.value = true
    }
  }
  }

  const togglePlay = () => {
    const video = vidRef.value;
    if (video) {
        video.play();
        is_playing.value = true
        visible.value = false
      }
  };

  const toggleStop = () => {
    const video = vidRef.value;
    if (video) {
      video.pause();
      visible.value = true
      is_playing.value = false
      }

  }


  watchEffect(() => {
  if (isActiveRef.value) {
    togglePlay(); // Play the video if isActiveRef is true
    visible.value=true
  } else {
    toggleStop(); // Pause the video if isActiveRef is false
  }
});

// togglePlay(); // Play the video if isActiveRef is true
// setTimeout(() => {
//   togglePlay(); 
// }, 1000)
// Play the video if isActiveRef is true




</script>



<style scoped>
.video {
  height: 100%;
  width: 100%;
}
.video-container {
position: relative;
  height: 100%;
  width: 100%;
}
.custom-button {
    position: absolute;
    bottom: 40px; /* Регулируйте этот отступ, чтобы установить кнопку в нужное место */
    left: 50%; /* Располагаем кнопку в центре горизонтально */
    transform: translateX(-50%); /* Центрируем кнопку относительно центра видео */
    background-color: #8ed6f8; /* Цвет фона кнопки */
    color: #fff; /*Цвет текста на кнопке*/
    padding: 10px 20px; /* Размеры кнопки */
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.second-custom-button {
  position: absolute;
  bottom: 50%; /* Регулируйте этот отступ, чтобы установить кнопку в нужное место */
  left: 50%; /* Располагаем кнопку в центре горизонтально */
  transform: translateX(-50%); /* Центрируем кнопку относительно центра видео */
  /* background-color: #fff; Цвет фона кнопки */
  color: #fff; /* Цвет текста на кнопке */
  padding: 10px 20px; /* Размеры кнопки */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


svg {
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  width: 90px;
  height: 90px;
  z-index: 10;
}

</style>


