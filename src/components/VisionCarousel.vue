<template>
    <div class="jumbotron">
        <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#eceef8"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"    
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="require('../assets/images/businessman-charts-close-up-1851448.jpg')"
      > 
      <b-card style="color : #394285;">
      <b-card-title >Vision & Goals</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This card has supporting text below as a natural lead-in to additional content.
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>
    </b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide        
        :img-src="require('../assets/images/code-coding-connection-943096.jpg')"
      >
      <b-card style="color : #394285;">
      <b-card-title >Vision & Goals</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This card has supporting text below as a natural lead-in to additional content.
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>
</b-carousel-slide>


      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="require('../assets/images/blur-close-up-desk-433604.jpg')"
      ><b-card style="color : #394285;">
      <b-card-title >Vision & Goals</b-card-title>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
        This card has supporting text below as a natural lead-in to additional content.
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>
    </b-carousel-slide>

    </b-carousel>   
    </div> 

</template>
