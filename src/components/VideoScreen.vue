<template>
    <swiper
    :direction="'vertical'"
    @slideChange="handleSlideChange"
    :modules="modules"
    class="mySwiper"
    ref="mySwiper"
  >
  <swiper-slide v-slot="{isActive}">
    <InfoSlide :isActive="isActive">
    </InfoSlide>
  </swiper-slide>
  
  <swiper-slide v-slot="{isActive}">
    <PreSlide 
    :guid="pre.guid" 
    :isActive="isActive"
    >
  </PreSlide>
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
  // Components
  import VideoPlayer from './VideoPlayer.vue';
  import PreSlide from './PreSlide.vue';
  import InfoSlide from './InfoSlide.vue';
  import {listVideos} from '../requests/list_video'
  import {shuffleArray} from '../utils/shuffle_array'
  import { ref} from 'vue';

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
      PreSlide,
      InfoSlide
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
      shuffleArray(list);
      const pre = list.pop()
      const mySwiper = ref(null);
      const slidesRefs = ref([]);
      return {
        modules: [],
        list,
        mySwiper,
        pre
      };
    },
  };
</script>

