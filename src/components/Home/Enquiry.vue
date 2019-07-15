<template>

    <div>
      
      <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Enquiry</b-button>

      <b-modal id="bv-modal-example" hide-footer>
        <div class="d-block text-center">
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

                <b-form-group id="input-group-3" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                    placeholder="Select Courses"
                  ></b-form-select>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter Query"
                  ></b-form-input>
                </b-form-group>

               <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
      </b-modal>
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
.button{
  background: orange;
}
</style>
