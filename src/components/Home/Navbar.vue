<template>
    <div style="color:#000;">
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
          <b-button id="show-btn" @click="$bvModal.show('bv-modal-exampless')">Enquiry</b-button>

      <b-modal id="bv-modal-exampless" hide-footer>
          <template slot="modal-title">
           Register
          </template>
        <div class="d-block text-center">
        
        <b-tabs content-class="mt-2" card end>
        <b-tab title="Sign In" active>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                <b-button type="submit" variant="success" style="color:#000;">Sign Up with Facebook</b-button>
                <b-button type="submit" variant="success" style="color:#000;">Sign Up with Google</b-button>

                <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                  >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter Phone Number"
                  ></b-form-input>
                </b-form-group>

               <b-button type="submit" variant="success" style="color:#000; width:100px;">Submit</b-button>
               <b-button @click="$bvModal.hide('bv-modal-exampless')" style="color:#000; width:100px;">Close Me</b-button>
        </b-form>
        <br>
        <hr>
        <h5>Don't have an Account ?</h5>
        </b-tab>
        
        <b-tab title="Sign Up now">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                  >
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Enter email"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter Phone Number"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter Location"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter Password"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="success" style="color:#000;">Create Account</b-button>
                <br>
                <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    I accept the terms and use
                </b-form-checkbox>

        </b-form>
        </b-tab>
        </b-tabs>
        
        </div>
        
      </b-modal>
          </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>


<script>
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'SPA', 'DLDA', 'ECCF', 'DAS'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
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
button{
  background: transparent;
}
</style>
