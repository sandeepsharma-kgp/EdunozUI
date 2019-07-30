<template>
  <v-container align-start justify-start fluid grid-list-xl style="background-color:#f9f9f9;">
    <h5
      style="font-weight: bold; color: #0e6251; padding: 12px; text-align: center;"
    >Popular Technology</h5>
    <v-layout justify-start row wrap child-flex>
      <v-flex lg3 md4 sm6 xs12>
        <v-img
          class="hello"
          :src="require('@/assets/images/bitcoin-blockchain-coins.jpg')"
          alt="Image"
        ></v-img>
      </v-flex>
      <v-flex lg3 md4 sm6 xs12>
        <v-img class="hello" :src="require('@/assets/images/python.jpg')" alt="Image"></v-img>
      </v-flex>
      <v-flex lg3 md4 sm6 xs12>
        <v-img class="hello" :src="require('@/assets/images/shutterstock.jpg')" alt="Image"></v-img>
      </v-flex>
      <v-flex lg3 md4 sm6 xs12>
        <v-img class="hello" :src="require('@/assets/images/Software-Testing.png')" alt="Image"></v-img>
      </v-flex>
      <v-flex lg4 md4 sm6 xs12>
        <v-img class="hello" :src="require('@/assets/images/angular.png')" alt="Image"></v-img>
      </v-flex>
      <v-flex lg4 md4 sm6 xs12>
        <v-img class="hello" :src="require('@/assets/images/information.jpeg')" alt="Image"></v-img>
      </v-flex>
      <v-flex lg4 md4 sm6 xs12>
        <v-img class="hello" :src="require('@/assets/images/development-cycle.png')" alt="Image"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
.hello {
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  width: 250px;
  padding: 4px;
  border-radius: 5px;
}
@media only screen and (max-width: 960px) {
  .hello {
    min-width: 80%;
  }
}
@media only screen and (max-width: 600px) {
  .hello {
    margin-left: auto;
    margin-right: auto;
    min-width: 100%;
  }
}
</style>
