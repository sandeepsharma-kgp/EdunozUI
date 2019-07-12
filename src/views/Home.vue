<template>
  <div class="home">
    <card-bar></card-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import cardBar from "../components/Home/card-bar.vue";
import popularTech from "../components/Home/popular-tech.vue";

export default {
  name: "home",
  components: {
    "card-bar": cardBar,
    "popular-tech": popularTech
  }
};
</script>
