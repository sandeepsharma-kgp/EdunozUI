<template>
  <div style="padding:50px; height: 20%; width: 100%; overflow: hidden">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="1000"
      controls
      autoplay="false"
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        :img-src="require('../../assets/images/businessman-charts-close-up-1851448.jpg')"
      >
        <h3>The Best</h3>
        <h4>We pride ourselves in being the very best in Teaching</h4>
      </b-carousel-slide>
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src="require('../../assets/images/code-coding-connection-943096.jpg')"
      ></b-carousel-slide>
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src="require('../../assets/images/blur-close-up-desk-433604.jpg')"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style scoped>
.notif {
  background-color: rgb(240, 109, 61) !important;
  padding: 0px;
  height: 15%;
  text-align: center;
}
</style>

<script>
export default {};
</script>