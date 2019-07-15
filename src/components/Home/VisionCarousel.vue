<template>
    <div>
        <b-carousel 
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#eceef8"
      img-width="1920"
      img-height="320"
      style="text-shadow: 1px 1px 2px #333;"    
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="require('../../assets/images/businessman-charts-close-up-1851448.jpg')"
      > 
      
    </b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide        
        :img-src="require('../../assets/images/code-coding-connection-943096.jpg')"
      >
</b-carousel-slide>


      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="require('../../assets/images/blur-close-up-desk-433604.jpg')"
      >
    </b-carousel-slide>

    </b-carousel>   
    </div> 

</template>

<style scoped>
.carousel{
  width:1808px;
  height:360px;
}
</style>

