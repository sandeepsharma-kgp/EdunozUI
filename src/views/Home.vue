<template>
  <div class="home">
    <nav-bar></nav-bar>
    <carousel-vis></carousel-vis>
    <webinar></webinar>
    <card-bar></card-bar>
    <popular-tech></popular-tech>
    <our-branches></our-branches>
    <more-about></more-about>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Home/Navbar.vue";
import VisionCarousel from "@/components/Home/VisionCarousel.vue";
import Webinar from "@/components/Home/Webinar.vue";
import cardBar from "../components/Home/card-bar.vue";
import Carousel from "../components/Home/Carousel.vue";

import popularTech from "../components/Home/popular-tech.vue";
import ourBranches from "../components/Home/our-branches.vue";
import moreAbout from "../components/Home/more-about-us.vue";
import footerBar from "../components/Home/footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    VisionCarousel,
    Webinar,
    "card-bar": cardBar,
    "popular-tech": popularTech,
    "our-branches": ourBranches,
    "more-about": moreAbout,
    "footer-bar": footerBar,
    "nav-bar": Navbar,
    // "vision-carousel": VisionCarousel,
    "webinar": Webinar,
    "carousel-vis": VisionCarousel
  }
};
</script>
