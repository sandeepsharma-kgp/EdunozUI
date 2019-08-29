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
          <b-nav-item href="#" to="/home/loign" @click.native="open = false">About Us</b-nav-item>
          <b-nav-item href="#" to="/ProgramDetailPage/course">Courses</b-nav-item>
          <b-nav-item href="#" to="/home/login">Get in touch</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items 
      Use &#128269 for search logo
        -->
        <b-navbar-nav class="ml-auto">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search Courses"></b-form-input>
          <!-- <router-link to="/login" id="modalpop"> -->
            <b-button v-if="showitem === false" id="show-btn" @click="show">
              <b-img :src="require('../assets/icons/man-user (1)@2x.png')"></b-img>
            </b-button>
          <!-- </router-link> -->
          <b-nav-item v-if="showitem === true" href="#" @click.prevent="signout">Sign Out</b-nav-item>
        </b-navbar-nav>
     <modals-container/>
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
const fb = require("../firebaseConfig.js"); 

import Vue from 'vue';
import VModal from 'vue-js-modal';
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false },injectModalsContainer: true })

import SignIn from './Home/SignIn'
export default {
  data() {
    return {
      showitem: this.checkIfIsLogged()
    };
  },
  methods: {
    signout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.commit("setCurrentUser", null);
          alert("Logged Out");
          this.isLogged = this.checkIfIsLogged();
          this.$router.go("/");
        })
        .catch(err => {
          alert("Failure");
          this.performingRequest = false;
          console.log(err);
        });
    },
    checkIfIsLogged() {
      const currentUser = fb.auth.currentUser
      if (currentUser) {
        return true;
      }
      return false
    },
   show () {
    this.$modal.show(SignIn);
  },
  hide () {
    this.$modal.hide(SignIn);
  }
  }
};
</script>

