<!--using vueper slide-->
<!-- For installation vueperslide
npm i --S vueperslides-->
<template>
     <div
    class="container-fluid"
    style="color: #0e6251; padding: 12px; background-color:#f9f9f9;"
    > 
    <h5 style="font-weight: bold;">Our Branches</h5>
    <vueper-slides class="no-shadow" :visible-slides="4" :arrows-outside="false"  :slide-ratio="1/7" :dragging-distance="100"
    :disableArrowsOnEdges="true" :bullets="false"
    :breakpoints="{ 800: { visibleSlides: 2, slideRatio:3/8}, 1025:{visibleSlides: 3, slideRatio:1/4}, 450:{visibleSlides: 1, slideRatio:3/4} }" style="padding-bottom: 20px">
    <vueper-slide> 
      <div slot="slideContent">
        <h6 style="font-weight: bold; color: #D66D02"> Our Branch</h6>
        <p>{{text}}</p>
        <div> <a href="default.asp">
        <img src="@/assets/icons/Group 76@2x.png" alt="Get Details" style="width:42px;height:42px;border:0;">
        Get Details
        </a>
        </div>
      </div>
    </vueper-slide> 
    <vueper-slide>
        <div slot="slideContent">
        <h6 style="font-weight: bold; color: #D66D02"> Our Branch</h6>
        <p>{{text}}</p>
        <div> <a href="default.asp">
        <img src="@/assets/icons/Group 76@2x.png" alt="Get Details" style="width:42px;height:42px;border:0;">
        Get Details
        </a>
        </div>
      </div>
    </vueper-slide>
    <vueper-slide> 
       <div slot="slideContent">
        <h6 style="font-weight: bold; color: #D66D02"> Our Branch</h6>
        <p>{{text}}</p>
        <div> <a href="default.asp">
        <img src="@/assets/icons/Group 76@2x.png" alt="Get Details" style="width:42px;height:42px;border:0;">
        Get Details
        </a>
        </div>
      </div>
    </vueper-slide> 
    <vueper-slide>
      <div slot="slideContent">
        <h6 style="font-weight: bold; color: #D66D02"> Our Branch</h6>
        <p>{{text}}</p>
        <div> <a href="default.asp">
        <img src="@/assets/icons/Group 76@2x.png" alt="Get Details" style="width:42px;height:42px;border:0;">
        Get Details
        </a>
        </div>
      </div>
    </vueper-slide>
    <vueper-slide> 
        <div slot="slideContent">
        <h6 style="font-weight: bold; color: #D66D02"> Our Branch</h6>
        <p>{{text}}</p>
        <div> <a href="default.asp">
        <img src="@/assets/icons/Group 76@2x.png" alt="Get Details" style="width:42px;height:42px;border:0;">
        Get Details
        </a>
        </div>
      </div>
    </vueper-slide> 
    <vueper-slide>
        <div slot="slideContent">
        <h6 style="font-weight: bold; color: #D66D02"> Our Branch</h6>
        <p>{{text}}</p>
        <div> <a href="default.asp">
        <img src="@/assets/icons/Group 76@2x.png" alt="Get Details" style="width:42px;height:42px;border:0;">
        Get Details
        </a>
        </div>
      </div>
    </vueper-slide>
    <vueper-slide> 
        <div slot="slideContent">
        <h6 style="font-weight: bold; color: #D66D02"> Our Branch</h6>
        <p>{{text}}</p>
        <div> <a href="default.asp">
        <img src="@/assets/icons/Group 76@2x.png" alt="Get Details" style="width:42px;height:42px;border:0;">
        Get Details
        </a>
        </div>
      </div>
    </vueper-slide> 
    <vueper-slide>
        <div slot="slideContent">
        <h6 style="font-weight: bold; color: #D66D02"> Our Branch</h6>
        <p>{{text}}</p>
        <div> <a href="default.asp">
        <img src="@/assets/icons/Group 76@2x.png" alt="Get Details" style="width:42px;height:42px;border:0;">
        Get Details
        </a>
        </div>
      </div>
    </vueper-slide>
        
    </vueper-slides>
    </div>
</template>

<script>
// In your VueJS component.
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  data(){
    return{
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"
    }
  }
};
</script>
