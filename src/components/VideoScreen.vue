<template>
    <swiper
    :direction="'vertical'"
    @slideChange="handleSlideChange"
    :modules="modules"
    class="mySwiper"
    ref="mySwiper"
  >
    <swiper-slide v-for="slide in list" :key="slide.guid">
      <video-player 
      v-slot="{ isActive }"
        :guid="slide.guid"
        >
      </video-player>
    </swiper-slide>
  </swiper>
</template>
<script >
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import VideoPlayer from './VideoPlayer.vue';
  import {listVideos} from '../requests/list_video'
  import { ref, watch} from 'vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  import '../style.css';

  // import required modules
  import { Pagination } from 'swiper';
  export default {
    components: {
      Swiper,
      SwiperSlide,
      VideoPlayer
    },
    methods: {
    handleSlideChange() {
      // Получите активный слайд Swiper
    //   const activeSlide = this.$refs.swiper.swiper.activeIndex;
    // console.log(this.$refs.mySwiper.activeIndex);
    },
  },
    async setup(data) {
      const res = await listVideos();
      const list = ref(res.items)
      const mySwiper = ref(null);
      const slidesRefs = ref([]);
      return {
        modules: [Pagination],
        list,
        mySwiper
      };
    },
  };
</script>

