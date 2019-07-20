  
<template>
<b-container fluid style="background-color:#2A326D; padding: 20px;">

      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide >
            <div class="card-container">
            <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
            <span>
                {{text}}     
            </span>
            </div>
        </swiper-slide>
        <swiper-slide >
            <div class="card-container">
            <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
            <span>
                {{text}}     
            </span>
            </div>
        </swiper-slide>
        <swiper-slide >
            <div class="card-container">
            <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
            <span>
                {{text}}     
            </span>
            </div>
        </swiper-slide>        
        <swiper-slide >
            <div class="card-container">
            <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
            <span>
                {{text}}     
            </span>
            </div>
        </swiper-slide> 
        <swiper-slide >
            <div class="card-container">
            <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
            <span>
                {{text}}     
            </span>
            </div>
        </swiper-slide> 
        <swiper-slide >
            <div class="card-container">
            <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
            <span>
                {{text}}     
            </span>
            </div>
        </swiper-slide> 
        <swiper-slide >
            <div class="card-container">
            <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
            <span>
                {{text}}     
            </span>
            </div>
        </swiper-slide> 
        <swiper-slide >
            <div class="card-container">
            <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
            <span>
                {{text}}     
            </span>
            </div>
        </swiper-slide> 
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</b-container>
</template>

<script>

  export default {
    data() {
      return {
        mainProps: {
        center: true,
        rounded: "circle",
        fluidGrow: false,
        blank: true,
        blankColor: "#bbb",
        alt: "Profile Picture"
      },
      text:"You know you're in love when you can't fall asleep because reality is finally better than your dreams. You only live once, but if you do it right, once is enough.", 
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 50,
          // init: false,
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
.card-container {
  background-color: #eceef8;
  border: #eceef8;
  border-radius: 12px;
  color: #0e6251;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 4px;
}
.card-container-img {
  width: 68px;
  height: 66px;
}
</style>

