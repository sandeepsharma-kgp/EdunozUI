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
          style="background: #ECEEF8;margin-bottom: 20px;"
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
          style="background: #ECEEF8;margin-bottom: 20px;"
          class="form-control"
          name="email"
          required="required"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <input
          v-model.trim="signupForm.password"
          type="text"
          style="background: #ECEEF8; margin-bottom: 20px;"
          class="form-control"
          name="password"
          required="required"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <input
          v-model.trim="signupForm.confirmPassword"
          type="password"
          style="background: #ECEEF8;margin-bottom: 20px;"
          class="form-control"
          name="confirm_password"
          required="required"
          placeholder="Confirm Password"
        />
      </div>
      <div class="form-group">
        <input
          v-model.trim="signupForm.location"
          type="text"
          style="background: #ECEEF8; margin-bottom: 20px;"
          class="form-control"
          name="confirm_password"
          required="required"
          placeholder="Location"
        />
      </div>

      <div class="form-group">
        <button
          @click="signup"
          type="submit"
          style="margin-bottom: 20px;background:#FF7340;"
          class="text-white btn-block btn-lg"
        >Create Account</button>
      </div>
      <div class="form-group">
        <label class="checkbox-inline">
          <input type="checkbox" required="required" /> I accept all terms and conditions
        </label>
      </div>
    </b-modal>
  </div>
</template>	  

<script>
import { currentUser } from "../../firebaseConfig";
const fb = require("../../firebaseConfig.js");
export default {
  data() {
    return {
      signupForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        location: ""
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
          alert("success");

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
              this.$router.push("/home");
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
    }
  }
};
</script>
