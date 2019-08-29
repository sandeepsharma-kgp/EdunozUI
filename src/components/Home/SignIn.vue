<template>
  <div>
    <!-- <b-modal v-if="performingRequest" id="bv-modal-signin" hide-footer hide-header size="md"> -->
      <div class="siginModal"  id="bv-modal-signin" hide-footer hide-header size="md">
        <div class="form-header">
          <p
            class="text-white"
            style="font-weight: bold; padding: 10px 10px 10px; border-radius: 5px; margin: -15px -15px 25px; color:#000000; font-size: 35px;background:#2A326d; text-align: center;font-family: 'Pacifico', sans-serif;"
          >Sign In</p>
        </div>
        <div class="form-group" align="center">
          <div class="btn-group">
            <div>
              <div id="ms">
                <button style="border:0;background: none; padding: 0;"> 
                
                  <b-img :src="require('@/assets/icons/fb.png')" rounded="" style="width: 70px;"></b-img>
                
                </button>
              </div>
              <b-button id="fbtn"
                class="text-white btn-info pl-5 pr-5"
                
                
                size="sm"
                style=" height: 55px;border-radius: 5px;"
              >Sign in with facebook</b-button>
            </div>
            <div style="margin-left:30px;">
              <div id="ms1">
                <a href="">
                  <b-img :src="require('@/assets/icons/google-plus.png')" rounded="" style="width: 70px;"></b-img>
                </a>
              </div>  
              <b-button
                class="btn-danger text-white pl-5 pr-5"
                id="gbtn"
                size="sm"
                style="border-radius: 5px; height: 55px;"
              >Sign in with gmail</b-button>
            </div>
          </div>
        </div>

        <div class="form-group">
          <input
            v-model.trim="loginForm.email"
            type="text"
            style="background: #ECEEF8;margin-bottom: 20px;"
            class="form-control"
            name="password"
            required="required"
            placeholder="Mobile/Email"
          />
        </div>

        <div class="form-group">
          <input
            v-model.trim="loginForm.password"
            type="password"
            style="background: #ECEEF8;margin-bottom: 20px;"
            class="form-control"
            name="confirm_password"
            required="required"
            placeholder="Password"
          />
        </div>
        

        <div class="form-group" align="center" text-align="center">
          <div class="btn-group" >
            <div style="margin-right:10px;">
              <button
              id="cancelbtn"
                @click="cancel"
                type="submit"
                class="btn-secondary text-white pl-5 pr-5"
                style="height:50px;border-radius: 5px;"
              >Cancel</button>
            </div>
            <div>
              <button id="signinbtn"
                @click="login"
                type="submit"
                
                text-align="center"
                class="btn-warning text-white pl-5 pr-5 "
                style=" height:50px;border-radius: 5px; text-align:center"
                
              > Sign&nbsp;In</button>
            </div>
          </div>
        </div>
        <div class="form-group" align="center">
          <b-button
            required="required"
            @click="$bvModal.show('bv-modal-signup'); $bvModal.hide('bv-modal-signin')"
            variant="outline"
          >Don't have account?</b-button>
        </div>
        <div class="form-group" align="center">
          <a href>SIGN UP NOW</a>
        </div>
      </div>
    <!-- </b-modal> -->
  </div>
</template>

<script>
const fb = require("../../firebaseConfig.js");
export default {
  name:"SignIn",
  data() {
    return {
      visible: false,
      loginForm: {
        email: "",
        password: ""
      },
      performingRequest: true
    };
  },
  methods: {
    login() {
      fb.auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(user => {
          this.$store.commit("setCurrentUser", user.user);
          this.$store.dispatch("fetchUserProfile");
          this.performingRequest = false;
          this.$router.go("/");
        })
        .catch(err => {
          this.performingRequest = false;
          this.$router.go("/");
          console.log(err);
        });
    },
    cancel() {
      this.performingRequest = false;
      this.$router.go("/");
    }
  }
};
</script>
<style scopped>
#ms {
display:none
}
#ms1 {
display:none
}
@media only screen and (max-width: 420px) {
#ms {
display:block
}
#ms1 {
display:block;
margin-left:50px;
}
#fbtn{
  display: none;
}
#gbtn{
  display: none;
}
}
@media screen and (max-width: 320px) {
  #signinbtn {
    width: 120px;
    vertical-align: middle;
    padding: 0px 0px 0px 0px;
    text-align: left;
    border: none; 
  }
  #cancelbtn{
    width: 120px;
    text-align: color;
    
  }
}
</style>