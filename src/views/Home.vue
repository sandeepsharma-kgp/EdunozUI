<template>
  <div class="home">
    <Navbar />
    <VisionCarousel fluid alt="Responsive image"/>
    <Programs />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import VisionCarousel from "@/components/VisionCarousel.vue";
import Programs from "@/components/Programs.vue";

export default {
  name: "home",
  components: {
    Navbar,
    VisionCarousel,
    Programs
  }
};
</script>
