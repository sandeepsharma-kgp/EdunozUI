<template>
  <v-container fluid style=" padding: 20px;">
      <h5 style="font-weight: bold; color: #0e6251; padding: 12px; text-align: center; padding: 12px;">Programs We Offer</h5>

      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide >
          <div class="card-container">
            <b-img :src="require('../../assets/images/online_tests.jpg')" style=" width: 90%; height: 80%; 
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card-container">
            <b-img :src="require('../../assets/images/get_full_support.jpg')" style="width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
          </swiper-slide>
        <swiper-slide >
          <div class="card-container">
          <b-img :src="require('../../assets/images/get_certified.jpg')" style="width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card-container">
          <b-img :src="require('../../assets/images/art-artsy-bulb-1938318.jpg')" style=" width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card-container">
          <b-img :src="require('../../assets/images/get_certified.jpg')" style="width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card-container">
          <b-img :src="require('../../assets/images/online_tests.jpg')" style="width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card-container">
          <b-img :src="require('../../assets/images/online_tests.jpg')" style="width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card-container">
          <b-img :src="require('../../assets/images/get_full_support.jpg')" style="width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card-container">
          <b-img :src="require('../../assets/images/get_certified.jpg')" style="width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="card-container">
          <b-img :src="require('../../assets/images/online_tests.jpg')" style="width: 90%; height: 80%;
        margin-right: auto; margin-left: auto;"></b-img>
          </div>
        </swiper-slide>
       
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-gray" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-gray" slot="button-next"></div>
      </swiper>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 0,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0
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
  .card-container {
  /*background-color: #eceef8;*/
  border: #eceef8;
  border-radius: 12px;
  color: #0e6251;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 4px;
  height: 200px;
}
.swiper-button-prev.swiper-button-gray,
.swiper-container-rtl .swiper-button-next.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23D3D3D3'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next.swiper-button-gray,
.swiper-container-rtl .swiper-button-prev.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23D3D3D3'%2F%3E%3C%2Fsvg%3E");
}
</style>