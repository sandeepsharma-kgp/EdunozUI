<template>
  <div class="carousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide :img-src="require('../../assets/images/img1.jpg')">
        <div class="centered" style="margin-bottom:50px;">
          <h3>SAP-ABAP</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style scoped>
.centered {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50% );
}
@media only screen and (max-width: 720px) {
  .centered{
    
  }
}</style>


