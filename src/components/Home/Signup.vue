<template>
  <div>
    <b-modal
      id="bv-modal-signup"
      v-if="performingRequest"
      hide-footer
      hide-header
      style="padding:600px"
      width="5000px"
      @submit.prevent
    >
      <div class="form-header">
        <p
          class="text-white"
          style="font-weight: bold; padding: 10px 10px 10px; margin: -15px -15px 25px; color:#000000; font-size:35px; background: #2A326d; text-align: center;font-family: 'Pacifico', sans-serif;"
        >Sign Up</p>
      </div>
      <div class="form-group">
        <input
          v-model.trim="signupForm.name"
          type="text"
          style="background: #FAF6F6;margin-bottom: 20px;"
          class="form-control"
          name="username"
          required="required"
          placeholder="Full Name"
        />
      </div>
      <div class="form-group">
        <input
          v-model.trim="signupForm.email"
          type="email"
          style="background: #FAF6F6;margin-bottom: 20px;"
          class="form-control"
          name="email"
          required="required"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          style="background: #FAF6F6;margin-bottom: 20px;"
          class="form-control"
          name="contactno"
          required="required"
          placeholder="Phone No"
        />
      </div>
      <div style="padding-bottom:15px">
        <label style="margin-right:20px;">Select Location</label>
        <select class="branch" >
                <option value="branch">Select Branch</option>
         </select>
      </div>
      <div class="form-group">
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref="password"
          v-model.trim="signupForm.password"
          style="background: #FAF6F6; margin-bottom: 20px;"
          class="form-control"
          required="required"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <input
          name="confirmPassword"
          type="password"
          placeholder="confirm Password"
          data-vv-as="password"
          v-model.trim="signupForm.confirmPassword"
          style="background: #FAF6F6;margin-bottom: 20px;"
          class="form-control"
          required="required"
          v-model="confirmPassword"
        />
      </div>
      <small v-if="showError">Passwords don't match!</small>
      <div class="form-group">
        <button
          @click="valid_data"
          type="submit"
          style="margin-bottom: 20px;background:#FF7340;"
          class="text-white btn-block btn-lg"
        >Create Account</button>
      </div>
      <div class="form-group">
        <label class="checkbox-inline">
          <input type="checkbox" required="required" v-model="signupForm.selected"  /> I accept all terms and conditions
        </label>
      </div>
    </b-modal>
  </div>
</template>	  

<script>
const fb = require("../../firebaseConfig.js");
export default {
  data() {
    return {
      signupForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        location: "",
        selected:""
      },
      performingRequest: true
    };
  },
  methods: {
    signup() {
      fb.auth
        .createUserWithEmailAndPassword(
          this.signupForm.email,
          this.signupForm.password
        )
        .then(user => {
          this.$store.commit("setCurrentUser", user.user);
          alert("Signed Up");

          // create user obj
          fb.usersCollection
            .doc(user.user.email)
            .set({
              name: this.signupForm.name,
              password: this.signupForm.password,
              location: this.signupForm.location
            })
            .then(() => {
              this.$store.dispatch("fetchUserProfile");
              this.performingRequest = false;
              this.$router.go("/");
            })
            .catch(err => {
              this.performingRequest = false;

              console.log(err);
            });
        })
        .catch(err => {
          alert("Failure");
          this.performingRequest = false;
          console.log(err);
        });
    },
    validate() {
      if (this.password != this.confirmPassword) {
        alert("password does not match");
      } else if (this.password == this.confirmPassword) {
        this.signup();
      }
    },
    valid_data(){
      if(!this.signupForm.name || !this.signupForm.email || !this.signupForm.password || !this.signupForm.confirmPassword  || !this.signupForm.selected )
      {
         alert("Please fill all the required field"); //location remained
      }
      else
      {
        this.validate();
      }
    }
  }
};
</script>

<style>
#dropdown-1 {
  border-block-color: black;
  background: transparent !important;
  color: #ffffff;
}
.branch{
  width:75%;
  border-style:solid;
  padding:1.8%;
  border-radius: 3px;
  background-color:#F9F4F4;
  color: gray;

}
</style>

