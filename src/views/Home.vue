<template>
  <div class="home">
    <Navbar />
    <VisionCarousel />
    <Webinar />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import VisionCarousel from "@/components/VisionCarousel.vue";
import Webinar from "@/components/Webinar.vue";

export default {
  name: "home",
  components: {
    Navbar,
    VisionCarousel,
    Webinar
  }
};
</script>
