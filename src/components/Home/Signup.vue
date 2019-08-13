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
          v-model="name"
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
          v-model="email"
        />
      </div>
      <div class="form-group">
        <input
          on-focus=clear
          type="text"
          style="background: #FAF6F6;margin-bottom: 20px;"
          class="form-control"
          name="contactno"
          required="required"
          placeholder="Phone No"
          v-model="phone"
          
        />
      </div>
      <div>
        <tr>
          <td>
        <label >Select&nbsp;Location:&nbsp;</label>
        </td>
        <td>
        <select
          id="course"
          class="course"
          name="course"
          style="margin-bottom: 20px; background: #FAF6F6;height:35px"
          v-model="location"
        >
          <option value="default">Select location</option>
          <option value="Course A">Wakad</option>
          <option value="Course B">Pimpari</option>
          <option value="Course C">Shivajinagar</option>
          <option value="Course D">Hadpsar</option>
          <option value="Course E">Pashan</option>
        </select>
        </td>
        </tr>
      </div>

      <div class="form-group">
        <input
          id="p1"
          name="password"
          type="password"
          placeholder="Password"
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
          v-model.trim="signupForm.confirmPassword"
          style="background: #FAF6F6;margin-bottom: 20px;"
          class="form-control"
          required="required"
          v-model="confirmPassword"
          v-on:blur="validate"
        />
      </div>
      <div class="form-group">
        <button
          @click="vvalidate"
          type="button"
          style="margin-bottom: 20px;background:#FF7340;"
          class="text-white btn-block btn-lg"
        >Create Account</button>
      </div>
      <div class="form-group">
        <label class="checkbox-inline">
          <input type="checkbox" required ="required" name="terms"/> I accept all terms and conditions
        </label>
      </div>
    </b-modal>
  </div>
</template>	  

<script>
import { messaging } from "firebase";
import { required, email, minLength } from "vuelidate/lib/validators";
import { isNull } from "util";
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
        phone: "",
        terms:""
      },
      performingRequest: true
    };
  },
  methods: {
    validate() {
      if (this.password !== this.confirmPassword) {
        alert("Password Doesn't Match, Please Enter Valid Password");
      }
    },

    vvalidate() {
      if (
        this.name == null ||
        this.email == null ||
        this.phone == null       
      ) {
        alert("All Fields Are Required");
      }
      if(!this.terms.checked) {
      alert("Please indicate that you accept the Terms and Conditions");
      signupForm.terms.focus();
      return false;
      }
    },

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

.course {
  min-width: 370px;
  border-style: solid;

  padding: 1.3%;
  border-radius: 3px;
  background-color: #e7e6fa;
  color: black;
}
</style>

