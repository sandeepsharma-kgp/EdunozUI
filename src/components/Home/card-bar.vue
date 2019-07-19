<template lang="en">
    <b-container fluid style="background-color:#2A326D; padding: 20px;">
    <vueper-slides
        class="no-shadow"
      :visible-slides="4"
      :slide-ratio="2/11"
      :pauseOnHover="true"
      :speed="1000"
      :dragging-distance="50"
      :autoplay="false"
      :disableArrowsOnEdges="true"
      :arrows="false"
      :bullets="false"
      :breakpoints="{
        800: { visibleSlides: 1},
        1025: { visibleSlides: 3},
        450: { visibleSlides: 1}
      }"
    > <vueper-slide :key="1" class="card-container">
            <div  slot="slideContent" style="padding: none;">
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <span>
                    {{text}}     
                </span>
            </div>
        </vueper-slide>
        <vueper-slide :key="2" class="card-container">
            <div  slot="slideContent" style="padding: none;">
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <span>
                    {{text}}     
                </span>
            </div>
        </vueper-slide>
             <vueper-slide :key="3" class="card-container">
            <div  slot="slideContent" style="padding: none;">
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <span>
                    {{text}}     
                </span>
            </div>
            </vueper-slide>
             <vueper-slide :key="4" class="card-container">
            <div  slot="slideContent" style="padding: none;">
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <span>
                    {{text}}     
                </span>
            </div>
            </vueper-slide>
             <vueper-slide :key="5" class="card-container">
            <div  slot="slideContent" style="padding: none;">
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <span>
                    {{text}}     
                </span>
            </div>
            </vueper-slide>
             <vueper-slide :key="6" class="card-container">
            <div  slot="slideContent" style="padding: none;">
                <b-img-lazy class="card-container-img" v-bind="mainProps" :src="require('@/assets/images/profile_img_for_cardbar.png')"></b-img-lazy>
                <span>
                    {{text}}     
                </span>
            </div>
            </vueper-slide>
        </vueper-slides>
    </b-container>
</template>

<script>
// @ is an alias to /src
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "card-bar",
  components: { VueperSlides, VueperSlide },
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
      text:
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams. You only live once, but if you do it right, once is enough."
    };
  },
  methods: {}
};
</script>

<style scoped>
.card-container {
  background-color: #eceef8;
  border: #eceef8;
  border-radius: 12px;
  color: #0e6251;
  font-weight: bold;
  text-align: unset;
  width: 100px;
  margin-right: 40px;
  overflow: auto;
}
.card-container-img {
  width: 68px;
  height: 66px;
}
@media only screen (max-width: 400px;){
    .card-container{
        margin-right: 0;
    }
}
</style>
