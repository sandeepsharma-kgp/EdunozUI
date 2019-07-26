<template>
    <div style="color:#000;">
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="logo"><b-img :src="require('../assets/images/Logo.png')" fluid alt="Fluid image"></b-img></div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#" :to="{name: 'about'}" @click.native="open = false">About Us</b-nav-item>
        <b-nav-item href="#" to="/ProgramDetailPage/course">Courses</b-nav-item>
        <b-nav-item href="#">Get in touch</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items 
      Use &#128269 for search logo
      -->
      <b-navbar-nav class="ml-auto">
      
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search Courses"></b-form-input>
          <b-button id="show-btn" @click="$bvModal.show('bv-modal-signin')"><b-img :src="require('../assets/icons/man-user (1)@2x.png')"></b-img></b-button>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>




<style scoped>
.navbar {
    background-color : #2A326D !important;
}
.img{
  size:20px;
}
.logo{
  width:100px;
  height:50px;
  padding-top:5px;

}
button{
  background: transparent;
}
</style>
