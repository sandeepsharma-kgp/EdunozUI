<template>
  <div class="carousel" style="height:500px">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="0"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="require('../../assets/images/code-coding-connection-943096.jpg')"
        :img-width="300"
        :img-height="100"

      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
