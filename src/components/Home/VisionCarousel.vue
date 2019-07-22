<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >

    <div style="background-color:#eceef8; width:900px; height:220px;margin-left:25%;margin-top:17%;">
      <h3 align="center" style="padding-top:20px; color:#394285">Vision & Goals</h3>
      <p style="padding:10px; color:#394285; font-weight:1000">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
 The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of 
 Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
 <div align="center" style="padding-bottom:15px;">
 <img :src="require('../../assets/icons/Group 73@2x.png')" ><h5>More</h5>
 </div>
    </div>
    
    </v-carousel-item>
  </v-carousel>
  
</template>   

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../../assets/images/businessman-charts-close-up-1851448.jpg')
          },
          {
            src: require('../../assets/images/code-coding-connection-943096.jpg')
          },
          {
            src: require('../../assets/images/blur-close-up-desk-433604.jpg')
          }
        ]
      }
    }
  }
</script>