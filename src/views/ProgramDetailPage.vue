<template>
  <div class="program_detail">
    <nav-bar></nav-bar>
    <FloatContactUs />
    <Enquire />
    <course />
    <footer-bar></footer-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import footerBar from "../components/footer.vue";
import Navbar from "../components/Navbar.vue";
import FloatContactUs from "../components/FloatContactUs.vue";
import Enquire from "../components/Enquire.vue";
import course from "../components/ProgramDetailPage/course.vue";
export default {
  name: "ProgramDetailPage",
  components: {
    "footer-bar": footerBar,
    "nav-bar": Navbar,
    FloatContactUs,
    course
  }
};
</script>
