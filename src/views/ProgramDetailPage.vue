<template>
  <div class="program_detail">
    <nav-bar></nav-bar>
    <Carousel />
    <lgp1/>
    <FloatContactUs />
    <Enquire />
    <course />
    <footer-bar></footer-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import pg1 from "@/components/Home/landing_page1.vue";
import footerBar from "../components/footer.vue";
import Navbar from "../components/Navbar.vue";
import FloatContactUs from "../components/FloatContactUs.vue";
import Enquire from "../components/Enquire.vue";
import course from "../components/ProgramDetailPage/course.vue";
import Carousel from "../components/ProgramDetailPage/Carousel.vue";
export default {
  name: "ProgramDetailPage",
  components: {
    "footer-bar": footerBar,
    "nav-bar": Navbar,
    FloatContactUs,
    course,
    Carousel,
    "lgp1": pg1,
  }
};
</script>
