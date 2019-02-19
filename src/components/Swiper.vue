<template>
  <div id="swiper">
    <swiper :options="swiperOption">
      <swiper-slide><img src="../assets/images/1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/images/1.jpg"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        speed: 1000,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style >
#swiper .swiper-container .swiper-pagination .swiper-pagination-bullet {
  background: #fff;
  opacity: 0.5;
}
#swiper .swiper-container .swiper-pagination .swiper-pagination-bullet-active{
  background-color: #0094ff;
  opacity: 1;
}
#swiper img{
  width: 100%;
  height: 4rem;
}
</style>
