<template>
  <div class="home" style="position:relative;">
    <Navbar />
    <VisionCarousel />
    <Webinar />
    <Enquiry style="position:absolute;left:95%; top:50%;" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Home/Navbar.vue";
import VisionCarousel from "@/components/Home/VisionCarousel.vue";
import Webinar from "@/components/Home/Webinar.vue";
import Enquiry from "@/components/Home/Enquiry.vue";

export default {
  name: "home",
  components: {
    Navbar,
    VisionCarousel,
    Webinar,
    Enquiry
  }
};
</script>
