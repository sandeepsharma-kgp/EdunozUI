<template>
  <div>
    <b-modal id="bv-modal-signin" hide-footer hide-header size="md">
      <div class="siginModal">
        <div class="form-header">
          <p
            class="text-white"
            style="font-weight: bold; padding: 10px 10px 10px; border-radius: 5px; margin: -15px -15px 25px; color:#000000; font-size: 35px;background:#2A326d; text-align: center;font-family: 'Pacifico', sans-serif;"
          >Sign In</p>
        </div>
        <div class="form-group">
          <div class="btn-group">
            <div>
              <button
                type="button"
                class="text-white btn-primary"
                style="width: 225px; height: 55px;border-radius: 5px;"
              >Sign in with facebook</button>
            </div>
            <div style="margin-left:20px;">
              <button
                type="button"
                class="btn-danger text-white"
                style="border-radius: 5px; width: 225px; height: 55px"
              >Sign in with gmail</button>
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

        <div class="form-group">
          <div class="btn-group">
            <div style="margin-right:20px; margin-left:20px; ">
              <button
                type="submit"
                class="btn-secondary text-white"
                style="width: 200px; height: 50px;border-radius: 5px;"
              >Cancel</button>
            </div>
            <div>
              <button
                @click="login"
                type="submit"
                class="btn-warning text-white"
                style="width: 200px; height: 50px;border-radius: 5px;"
              >Sing In</button>
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
    </b-modal>
  </div>
</template>

<script>
const fb = require("../../firebaseConfig.js");
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.performingRequest = true;

      fb.auth
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(user => {
          console.log("user", user);
          console.log("user,user", user.user);

          this.$store.commit("setCurrentUser", user.user);
          this.$store.dispatch("fetchUserProfile");
          this.performingRequest = false;
          this.$router.push("/home");
        })
        .catch(err => {
          this.performingRequest = false;
          console.log(err);
        });
    }
  }
};
</script>