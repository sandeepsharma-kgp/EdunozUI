<template>
    <div class="carousel" style="">
        <b-carousel
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-width="824"
      img-height="280"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"

    >
      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="require('../../assets/images/businessman-charts-close-up-1851448.jpg')"
        img-width="500"
        img-height="100"
      >
      
      </b-carousel-slide>
</b-carousel>
    </div>
</template>
