<template>
  <md-card> 
      <h1 align="center">Programs we Offer</h1>
    <md-card-actions>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_full_support.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_certified.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/art-artsy-bulb-1938318.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_certified.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_full_support.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_certified.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="width:80%;padding:25px;"></b-img></swiper-slide>
       
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 80,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-slide {
    height: 300px;
  }
</style>