<template>
<b-container fluid class="b-container-class" style="padding: 20px;">
    <b-row align-h="center">
    <b-col align-self="center" lg="5" md="5">
      <b-img left :src="require('../../assets/images/blur-close-up-desk-433604.jpg')" alt="Left image" class="img-webinar" ></b-img>
      <br>
      <br>
    </b-col>
    <b-col align-self="center" lg="7" md="7">
      <div style="text-align: center;">
      <h4>Webinar</h4>
      <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
        The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of 
        Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
      </p>
      <b-btn to="/Webinar">See Details</b-btn>
      </div>
    </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.img-webinar{
  width: 100%; 
  border-radius:12px;
}
.btn{
  background-color : #d66d02 !important;
  width : 50%;
}
.b-container-class{
  background-color: #eceef8; 
  padding: 30px 100px 30px 100px;
}
@media only screen and (max-width: 576px) {
  .b-container-class{
    padding: 10px;
  }
}
</style>

