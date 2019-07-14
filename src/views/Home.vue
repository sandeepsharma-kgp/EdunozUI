<template>
  <div class="home">
    <card-bar></card-bar>
    <popular-tech></popular-tech>
    <our-branches></our-branches>
    <more-about></more-about>
  </div>
</template>

<script>
// @ is an alias to /src
import cardBar from "../components/Home/card-bar.vue";
import popularTech from "../components/Home/popular-tech.vue";
import ourBranches from "../components/Home/our-branches.vue";
import moreAbout from "../components/Home/more-about-us.vue";
export default {
  name: "home",
  components: {
    "card-bar": cardBar,
    "popular-tech": popularTech,
    "our-branches": ourBranches,
    "more-about": moreAbout
  }
};
</script>
