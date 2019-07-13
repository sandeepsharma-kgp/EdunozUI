<template>
  <div class="home">
    <card-bar></card-bar>
    <popular-tech></popular-tech>
    <our-branches></our-branches>
  </div>
</template>

<script>
// @ is an alias to /src
import cardBar from "../components/Home/card-bar.vue";
import popularTech from "../components/Home/popular-tech.vue";
import ourBranches from "../components/Home/our-branches.vue";

export default {
  name: "home",
  components: {
    "card-bar": cardBar,
    "popular-tech": popularTech,
  }
};
</script>
