<template>
    <swiper
    :direction="'vertical'"
    @slideChange="handleSlideChange"
    :modules="modules"
    class="mySwiper"
    ref="mySwiper"
  >
  <swiper-slide>
    <h1>Welcome to our AI project. <br> <br>If you interested swipe screen up</h1>
  </swiper-slide>
  <swiper-slide v-slot="{isActive}">
    <PreSlide :isActive="isActive"></PreSlide>
  </swiper-slide>
  <swiper-slide>
    <h1>That's all. Enjoy our videos</h1>
  </swiper-slide>
    <swiper-slide 
    v-for="slide in list" 
    v-slot="{isActive}"
    >
      <VideoPlayer 
        :guid="slide.guid"
        :isActive="isActive"
        >
      </VideoPlayer>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import VideoPlayer from './VideoPlayer.vue';
  import PreSlide from './PreSlide.vue';
  import {listVideos} from '../requests/list_video'
  import { ref, watch} from 'vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  import '../style.css';

  // import required modules
  export default {
    components: {
      Swiper,
      SwiperSlide,
      VideoPlayer,
      PreSlide
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
      let list = res.items
      const mySwiper = ref(null);
      const slidesRefs = ref([]);
      return {
        modules: [],
        list,
        mySwiper
      };
    },
  };
</script>

