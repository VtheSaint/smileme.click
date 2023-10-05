<template>
    <div class="video-container">
        <video
            playsinline
            class="video"
            @click="play_pause"
            src="../../assets/preview.mp4"
            preload="auto"
            type="video/mp4"
            ref="vidRef"
            >
        </video>
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

const vidRef = ref(null); // Reference to the video element
let isActiveRef = toRefs(props).isActive;


const swiper = useSwiper();


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



togglePlay();



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
    bottom: 20px; /* Регулируйте этот отступ, чтобы установить кнопку в нужное место */
    left: 50%; /* Располагаем кнопку в центре горизонтально */
    transform: translateX(-50%); /* Центрируем кнопку относительно центра видео */
    background-color: #8ed6f8; /* Цвет фона кнопки */
    color: #fff; /* Цвет текста на кнопке */
    padding: 10px 20px; /* Размеры кнопки */
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>


