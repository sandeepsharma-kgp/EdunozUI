  
<template>
<b-container fluid>
<div
    class="container-fluid"
    style="color: #0e6251; padding: 20px; background-color:#ffffff;"
  >
    <h5 style="font-weight: bold; text-align: center;">Our Branches</h5>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide >
            <div class="text-center">
          <h6 style="font-weight: bold; color: #D66D02">Our Branch</h6>
          <p>{{ text }}</p>
          <div>
            <a href="default.asp">
              <img
                src="@/assets/icons/Group 76@2x.png"
                alt="Get Details"
                style="width:42px;height:42px;border:0;"
              />
              Get Details
            </a>
          </div>
          </div>
        </swiper-slide>
        <swiper-slide >
            <div class="text-center">
          <h6 style="font-weight: bold; color: #D66D02">Our Branch</h6>
          <p>{{ text }}</p>
          <div>
            <a href="default.asp">
              <img
                src="@/assets/icons/Group 76@2x.png"
                alt="Get Details"
                style="width:42px;height:42px;border:0;"
              />
              Get Details
            </a>
          </div>
          </div>
        </swiper-slide>
        <swiper-slide >
            <div class="text-center">
          <h6 style="font-weight: bold; color: #D66D02">Our Branch</h6>
          <p>{{ text }}</p>
          <div>
            <a href="default.asp">
              <img
                src="@/assets/icons/Group 76@2x.png"
                alt="Get Details"
                style="width:42px;height:42px;border:0;"
              />
              Get Details
            </a>
          </div>
          </div>
        </swiper-slide>        
        <swiper-slide >
            <div class="text-center">
          <h6 style="font-weight: bold; color: #D66D02">Our Branch</h6>
          <p>{{ text }}</p>
          <div>
            <a href="default.asp">
              <img
                src="@/assets/icons/Group 76@2x.png"
                alt="Get Details"
                style="width:42px;height:42px;border:0;"
              />
              Get Details
            </a>
          </div>
          </div>
        </swiper-slide> 
        <swiper-slide >
            <div class="text-center">
          <h6 style="font-weight: bold; color: #D66D02">Our Branch</h6>
          <p>{{ text }}</p>
          <div>
            <a href="default.asp">
              <img
                src="@/assets/icons/Group 76@2x.png"
                alt="Get Details"
                style="width:42px;height:42px;border:0;"
              />
              Get Details
            </a>
          </div>
          </div>
        </swiper-slide> 
        <swiper-slide >
            <div class="text-center">
          <h6 style="font-weight: bold; color: #D66D02">Our Branch</h6>
          <p>{{ text }}</p>
          <div>
            <a href="default.asp">
              <img
                src="@/assets/icons/Group 76@2x.png"
                alt="Get Details"
                style="width:42px;height:42px;border:0;"
              />
              Get Details
            </a>
          </div>
          </div>
        </swiper-slide> 
        <swiper-slide >
            <div class="text-center">
          <h6 style="font-weight: bold; color: #D66D02">Our Branch</h6>
          <p>{{ text }}</p>
          <div>
            <a href="default.asp">
              <img
                src="@/assets/icons/Group 76@2x.png"
                alt="Get Details"
                style="width:42px;height:42px;border:0;"
              />
              Get Details
            </a>
          </div>
          </div>
        </swiper-slide> 
        <swiper-slide >
        <div class="text-center">
          <h6 style="font-weight: bold; color: #D66D02">Our Branch</h6>
          <p>{{ text }}</p>
          <div>
            <a href="default.asp">
              <img
                src="@/assets/icons/Group 76@2x.png"
                alt="Get Details"
                style="width:42px;height:42px;border:0;"
              />
              Get Details
            </a>
          </div>
          </div>
        </swiper-slide> 
        <div class="swiper-button-prev swiper-button-gray" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-gray" slot="button-next"></div>
      </swiper>
</div>
</b-container>
</template>

<script>

  export default {
    data() {
      return {
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",        
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 50,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
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
.swiper-button-prev.swiper-button-gray,
.swiper-container-rtl .swiper-button-next.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23D3D3D3'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next.swiper-button-gray,
.swiper-container-rtl .swiper-button-prev.swiper-button-white {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23D3D3D3'%2F%3E%3C%2Fsvg%3E");
}
</style>
