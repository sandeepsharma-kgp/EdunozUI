<template>
  <div
    class="container-fluid"
    style="color: #0e6251; padding: 12px; background-color:#eceef8;"
  >
    <h5 style="font-weight: bold;">Popular Technology</h5>
    <b-container fluid>
      <b-row align-h="center">
        <b-col>
          <b-img-lazy
            class="tech-container-img"
            v-bind="mainProps"
            :src="require('@/assets/images/bitcoin-blockchain-coins.jpg')"
          ></b-img-lazy>
        </b-col>
        <b-col>
          <b-img-lazy
            class="tech-container-img"
            v-bind="mainProps"
            :src="require('@/assets/images/python.jpg')"
          ></b-img-lazy>
        </b-col>
        <b-col>
          <b-img-lazy
            class="tech-container-img"
            v-bind="mainProps"
            :src="require('@/assets/images/shutterstock.jpg')"
          ></b-img-lazy>
        </b-col>
        <b-col>
          <b-img-lazy
            class="tech-container-img"
            v-bind="mainProps"
            :src="require('@/assets/images/Software-Testing.png')"
          ></b-img-lazy>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-img-lazy
            class="tech-container-img"
            v-bind="mainProps"
            :src="require('@/assets/images/angular.png')"
          ></b-img-lazy>
        </b-col>
        <b-col>
          <b-img-lazy
            class="tech-container-img"
            v-bind="mainProps"
            :src="require('@/assets/images/information.jpeg')"
          ></b-img-lazy>
        </b-col>
        <b-col>
          <b-img-lazy
            class="tech-container-img"
            v-bind="mainProps"
            :src="require('@/assets/images/development-cycle.png')"
          ></b-img-lazy>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "popular-tech",
  data() {
    return {
      mainProps: {
        center: true,
        rounded: true,
        fluidGrow: false,
        blank: true,
        blankColor: "#bbb",
        alt: "Profile Picture"
      }
    };
  }
};
</script>
<style scoped>
.tech-container-img {
  height: 100px;
  width: 350px;
  margin: 20px;
}
</style>
