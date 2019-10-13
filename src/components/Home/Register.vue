<template>
    
    <div class="maincontainer"> 
      <v-form ref="form"
      v-model="valid"
      :lazy-validation="lazy"> 
      <v-app class="changeheight">
        <br>
        <br>
        <br>
        <br>
        <h5 style="font-weight: bold; color: #0e6251; 
        padding-top: 20px; text-align: center;">Let Us Know Your Intrests</h5>
        <v-container grid-list-md text-xs-center fluid >
          <v-layout row wrap>
            
            <v-flex  class="mobile">
              <v-text-field 
                v-model="name"
                :rules="nameRules"
                label="Name"
            ></v-text-field>
            </v-flex>

            <v-flex  class="mobile">
              <v-text-field 
                v-model="email"
                :rules="emailRules"
                label="Email"
              ></v-text-field>
            </v-flex>

            <v-flex class="mobile" >
              <v-text-field 
                v-model="phone_no"
                :rules="phonenoRules"
                label="Phone Number"
                type="integer"
              ></v-text-field>
            </v-flex>

            <v-flex class="mobile">        
              <v-select
                v-model="courses"
                :items="items"
                :rules="courseRules"
                :menu-props="{ maxHeight: '400'}"
                label="Select"
                multiple
                hint="Select courses"
                persistent-hint
                
              ></v-select>        
            </v-flex>

            <v-flex class="mobile">
              <v-btn  @click="saveDetails()">Register</v-btn>
            </v-flex>

          </v-layout>
        </v-container>  
      </v-app>
      </v-form> 
    </div>  
</template>
<script>
import { studentsCollection } from '../../firebaseConfig';
import { type } from 'os';

export default {
    data()
    {
        return{
            valid: true,
            
            nameRules: [
              v => !!v || 'Name is required',
              v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],

            
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],

            phonenoRules: [
              v=>!!v|| 'Phone number is required',
              v => (v || '').length ==10 || 'enter 10 digit number', 
            ],

            courseRules: [
              v=>!!v|| 'course is required',
            ],

            lazy: false,
            name: null,
            email:null,
            phone_no:null,
            courses: [],
            items: ['Java', 'Python', 'Digital Marketing', 'Data Science'],            
        }
    },
    methods:{
       saveDetails()
      {
         if (this.$refs.form.validate()) {
          this.snackbar = true 
          alert("Registration successful");
        studentsCollection.add({
          name : this.name,
          email : this.email,
          phone_no: this.phone_no,
          courses: this.courses
        }).then( this.$refs.form.reset()).then(this.$router.push('/'))
        }
        else{
          
        }
        
        
      }
    }

}   
</script>
<style>

  .changeheight{
    max-height: 220px;
    background-color: white; 
  }

   
    @media screen  and (max-width: 840px) {
     .mobile {
              width: 400px;
             }
    .maincontainer{
      padding-bottom: 200px;
    }
  }
   

</style>