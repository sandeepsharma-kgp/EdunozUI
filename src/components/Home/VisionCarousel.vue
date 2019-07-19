<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    
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