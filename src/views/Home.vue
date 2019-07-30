<template>
  <div class="home">
    <nav-bar></nav-bar>
    <carousel-vis></carousel-vis>
    <MultiCard />
    <webinar></webinar>
    <card-bar></card-bar>
    <popular-tech></popular-tech>
    <our-branches></our-branches>
    <more-about></more-about>
    <footer-bar></footer-bar>
    <FloatContactUs />
    <QuickMessage />
    <SignIn />
    <Signup />
    <Enquire />
  </div>
</template>

<script>
// @ is an alias to /src
import cardBar from "../components/Home/card-bar.vue";
import Carousel from "../components/Home/Carousel.vue";
import popularTech from "../components/Home/popular-tech.vue";
import ourBranches from "../components/Home/our-branches.vue";
import moreAbout from "../components/Home/more-about-us.vue";
import footerBar from "../components/footer.vue";
import Navbar from "../components/Navbar.vue";
import VisionCarousel from "../components/Home/VisionCarousel.vue";
import Webinar from "../components/Home/Webinar.vue";
import FloatContactUs from "../components/FloatContactUs.vue";
import QuickMessage from "../components/Home/QuickMessage.vue";
import SignIn from "../components/Home/SignIn.vue";
import Signup from "../components/Home/Signup.vue";
import Enquire from "../components/Enquire.vue";
import MultiCard from "../components/Home/MultiCard.vue";
export default {
  name: "home",
  components: {
    "card-bar": cardBar,
    "popular-tech": popularTech,
    "our-branches": ourBranches,
    "more-about": moreAbout,
    "footer-bar": footerBar,
    "nav-bar": Navbar,
    // "vision-carousel": VisionCarousel,
    webinar: Webinar,
    "carousel-vis": VisionCarousel,
    FloatContactUs,
    SignIn,
    Signup,
    QuickMessage,
    Enquire,
<<<<<<< HEAD
    MultiCard,
=======
    MultiCard
>>>>>>> acd7b17ee39f8441b6113326e953968cc17440d9
  }
};
</script>
