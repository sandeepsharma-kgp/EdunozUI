<template>
  <div>
    <v-carousel hide-delimiters height="350">
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>

    <div>
      <div class="viscard" style="background-color:#eceef8;">
        <h1 align="center">Vision & Goals</h1>
        <p style="padding:10px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>   

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../../assets/images/businessman-charts-close-up-1851448.jpg")
        },
        {
          src: require("../../assets/images/code-coding-connection-943096.jpg")
        },
        {
          src: require("../../assets/images/blur-close-up-desk-433604.jpg")
        }
      ]
    };
  }
};
</script>


// <div style="background-color:#eceef8; width:900px; height:220px;margin-left:25%;margin-top:17%;">
//       <h3 align="center" style="padding-top:20px; color:#394285">Vision & Goals</h3>
//       <p style="padding:10px; color:#394285; font-weight:1000">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
//  The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of 
//  Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
//  <div align="center" style="padding-bottom:15px;">
//  <img :src="require('../../assets/icons/Group 73@2x.png')" ><h5>More</h5>
//  </div>
//     </div>

<style scoped>
div {
  position: relative;
}
.viscard {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  opacity: 0.95;
}
.bg {
  position: absolute;
  width: 100%;
  background-color: #5d6493;
  top: 100%;
  height: 80px;
  z-index: -1;
}
</style>
