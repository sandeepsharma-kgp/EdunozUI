
<template>
  <v-container fluid grid-list-xl style="background-color:#ffff;">
    <h5 style="font-weight: bold; color: #0e6251; padding: 12px; text-align: center;">GET YOUR CAREER COUNSELING DONE FROM US</h5>

    <v-layout  child-flex justify-content: space-evenly>
      <v-flex md6 lg3>
        <v-card height="calc(100% - 5px)" class="box">
          <br />
          <v-img
            style="height: 130px; width: 180px; margin-left: auto; margin-right: auto; padding: 4px;"
            :src="require('@/assets/images/great_faculty.jpg')"
            alt="Image"
          ></v-img>
          <label class="label-text">Plan Your Career Path</label>
          <v-card-text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</v-card-text>
        </v-card>
      </v-flex>
      <v-flex md6 lg3>
        <v-card class="box">
          <br />
          <v-img
            style="height: 130px; width: 180px; margin-left: auto; margin-right: auto; padding: 4px;"
            :src="require('@/assets/images/get_certified.jpg')"
            alt="Image"
          ></v-img>
          <label class="label-text">Get Certified</label>
          <v-card-text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</v-card-text>
        </v-card>
      </v-flex>
      <v-flex md6 lg3>
        <v-card class="box">
          <br />
          <v-img
            style="height: 130px; width: 180px; margin-left: auto; margin-right: auto; padding: 4px;"
            :src="require('@/assets/images/online_tests.jpg')"
            alt="Image"
          ></v-img>
          <label class="label-text">Online Tests</label>
          <v-card-text>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
.career-card-title {
  color: #ff7340;
  font-weight: bold;
  font-size: 16px;
  text-align: center !important;
  padding: 6px;
}
.label-text{
    font-family: Monstserrat SemiBold;
    font-size: 25px;
}
.span-text{
    font-weight: bold; 
    color: #0e6251;
    padding: 12px; 
    text-align: center;

}
.box {
  height: "100%";
  border: 3px solid #394285;
  border-radius: 12px;
  padding: 5px;
  color: #0e6251;
  text-align: center;
  background-color: #f9f9f9;
}
</style>
