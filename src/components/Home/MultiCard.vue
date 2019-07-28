<template>
  <md-card>
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1 align="center">Programs we Offer</h1>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption" style="padding:20px;">
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/adult-connection-data-1181354.jpg')"
            style="padding: 28px; width: 80%; height: 80%; "
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/cheerful-colleagues-digital-device-1432942.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/adult-asian-caucasian-1153213.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/ballpen-blur-close-up-461077.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/code-coding-connection-943096.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/art-artsy-bulb-1938318.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/businessmen-classroom-communication-267507.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/get_certified.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/online_tests.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/adult-connection-data-1181354.jpg')"
            style="padding: 28px; width: 80%; height: 80%; "
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/cheerful-colleagues-digital-device-1432942.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/adult-asian-caucasian-1153213.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/ballpen-blur-close-up-461077.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/code-coding-connection-943096.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/art-artsy-bulb-1938318.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/businessmen-classroom-communication-267507.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/get_certified.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>
        <swiper-slide>
          <b-img
            :src="require('../../assets/images/online_tests.jpg')"
            style="padding: 28px; width: 80%; height: 80%;"
          ></b-img>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
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
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 4
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
    };
  }
};
</script>

<style scoped>
.swiper-slide {
  height: 250px;
}
</style>  