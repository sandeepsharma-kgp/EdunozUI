<template>
  <md-card> 
      <br>
      <br>
      <br>
      <br>
      <h5 style="font-weight: bold; color: #0e6251; 
      padding-top: 20px; text-align: center;">Programs We Offer</h5>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption" style="padding:20px;">
        <swiper-slide ><b-img :src="require('../../assets/images/adult-connection-data-1181354.jpg')" style="padding: 28px; width: 80%; height: 80%; "></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/aerial-desk-device-1011329.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/cheerful-colleagues-digital-device-1432942.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/adult-asian-caucasian-1153213.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/ballpen-blur-close-up-461077.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/code-coding-connection-943096.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/art-artsy-bulb-1938318.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/businessmen-classroom-communication-267507.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_certified.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/adult-connection-data-1181354.jpg')" style="padding: 28px; width: 80%; height: 80%; "></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/aerial-desk-device-1011329.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/cheerful-colleagues-digital-device-1432942.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/adult-asian-caucasian-1153213.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/ballpen-blur-close-up-461077.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/code-coding-connection-943096.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/art-artsy-bulb-1938318.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/businessmen-classroom-communication-267507.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/get_certified.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
        <swiper-slide ><b-img :src="require('../../assets/images/online_tests.jpg')" style="padding: 28px; width: 80%; height: 80%;"></b-img></swiper-slide>
       
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-gray" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-gray" slot="button-next"></div>
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
            800: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            450: {
              slidesPerView: 1,
              spaceBetween: 0
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
  .swiper-button-prev.swiper-button-gray,
.swiper-container-rtl .swiper-button-next.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23D3D3D3'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next.swiper-button-gray,
.swiper-container-rtl .swiper-button-prev.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23D3D3D3'%2F%3E%3C%2Fsvg%3E");
}
</style>  