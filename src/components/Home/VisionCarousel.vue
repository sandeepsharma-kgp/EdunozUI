<template>
<div>
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</div>

</template>

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>

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

