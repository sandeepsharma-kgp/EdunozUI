<template>
  <md-card> 
      <h1 align="center">Programs we Offer</h1>
    <md-card-actions>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="padding: 28px; width: 90%; height: 80%; 
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_full_support.jpg')" style="padding: 28px; width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_certified.jpg')" style="padding: 28px; width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/art-artsy-bulb-1938318.jpg')" style="padding: 28px; width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_certified.jpg')" style="padding: 28px; width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="padding: 28px; width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="padding: 28px; width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_full_support.jpg')" style="padding: 28px; width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_certified.jpg')" style="padding: 28px; width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="padding: 28px; width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img></swiper-slide>
       
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
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-slide {
    height: 250px;
  }
</style>