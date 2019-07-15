<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="logo"><b-img :src="require('../../assets/images/Logo.png')" fluid alt="Fluid image"></b-img></div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About Us</b-nav-item>
        <b-nav-item href="#">Courses</b-nav-item>
        <b-nav-item href="#">Get in touch</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items 
      Use &#128269 for search logo
      -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search Courses"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" style="background : transparent; border:none;"><b-img :src="require('../../assets/icons/man-user (1)@2x.png')"></b-img></b-button>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    
}
</script>


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
</style>
