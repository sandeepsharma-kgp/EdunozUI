<template>
  <div style="color:#000;">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="logo">
        <b-img :src="require('../assets/images/Logo.png')" fluid alt="Fluid image"></b-img>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" to="/">Home</b-nav-item>
          <b-nav-item href="#">About Us</b-nav-item>
          <b-nav-item href="#" to="/ProgramDetailPage/course">Courses</b-nav-item>
          <b-nav-item href="#" to="/home/login">Get in touch</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items 
      Use &#128269 for search logo
        -->
        <b-navbar-nav class="ml-auto">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search Courses"></b-form-input>
          <router-link to="/login" id="modalpop">
            <b-button id="show-btn" @click="$bvModal.show('bv-modal-signin')">
              <b-img :src="require('../assets/icons/man-user (1)@2x.png')"></b-img>
            </b-button>
          </router-link>
          <b-nav-item v-if="showitem === true" href="#" to="/home/login">Sign Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>




<style scoped>
.navbar {
  background-color: #2a326d !important;
}
.img {
  size: 20px;
}
.logo {
  width: 100px;
  height: 50px;
  padding-top: 5px;
}
button {
  background: transparent;
}
</style>

<script>
export default {
  data() {
    return {
      showitem: this.checkIfIsLogged()
    };
  },
  methods: {
    checkIfIsLogged() {
      if (this.$store.dispatch("getUser")) {
        return true;
      }
      return false;
    }
  }
};
</script>

