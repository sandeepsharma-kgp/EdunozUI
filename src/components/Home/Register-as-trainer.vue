<template>
    <div class="maincontainer1">  
       <v-form ref="form"
      v-model="valid"
      :lazy-validation="lazy"> 
      <div id="regtrainer" class="changeheight1">
        <h5 style="font-weight: bold; color: #0e6251; 
         padding-top: 20px; text-align: center;">JOIN US AS TRAINER</h5>
        
          <v-container grid-list-md text-xs-center fluid >
            <v-layout row wrap>
              
              <v-flex  class="mobile1">
                <v-text-field 
                  v-model="name_trainer"
                  label="Name"
                  :rules="nameRules"
                ></v-text-field>
                </v-flex>

              <v-flex  class="mobile1">
                <v-text-field 
                  v-model="email_trainer"
                  :rules="emailRules"
                  label="Email"
              ></v-text-field>
              </v-flex>

              <v-flex class="mobile1">
                <v-text-field 
                  v-model="phone_no_trainer"
                  :rules="phonenoRules"
                  label="Phone Number"
                  type="integer"
                ></v-text-field>
              </v-flex>

              <v-flex   class="mobile1">        
                <v-select
                  v-model="courses_trainer"
                  :items="items_trainer"
                  :menu-props="{ maxHeight: '400'}"
                  label="Select"
                  multiple
                  hint="Select courses"
                  persistent-hint
                ></v-select>      
              </v-flex>

              <v-flex class="mobile1" >
                <div class="image-upload">
                  <input value="upload" id="fileButton" @change="onFileSelected" type="file"/>
                </div>
              </v-flex>
       
              <v-flex class style="display: inline-grid;padding: 10px;margin-left: -85px;">
                <v-btn  @click="saveDetailsTrainer()">Register</v-btn>
              </v-flex>
  
            </v-layout>
          </v-container>
        
      </div>
      </v-form>  
    </div>
</template>

<script>
import firebase from 'firebase';
import { trainersCollection, storageRef } from '../../firebaseConfig';
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

            lazy: false,

            name_trainer: null,
            email_trainer:null,
            phone_no_trainer:null,
            courses_trainer: [],
            items_trainer: ['Java', 'Python', 'Digital Marketing', 'Data Science'],
            selected_file: null,            
        }
    },
    methods:{
             
             saveDetailsTrainer(event)
              {
                
                var storageRef1 = firebase.storage().ref("Resume/"+this.selected_file.name);
                storageRef1.put(this.selected_file);
                trainersCollection.add({
                name : this.name_trainer,
                email : this.email_trainer,
                phone_no: this.phone_no_trainer,
                courses: this.courses_trainer
              }).then( this.$refs.form.reset()).then(this.$router.push('/'))
               event.preventDefault()  
              },
              onFileSelected(event){
                var sf = this.selected_file = event.target.files[0];
              }

    }

} 
</script>
<style>

  .changeheight1{
    max-height: 220px;
    background-color: white; 
   }

 .image-upload > input
  { 
    padding-top: 20px;
    max-width: 500px;
    
  }

   
  @media screen  and (max-width: 840px) {
    .mobile1 {
                width: 400px;
             }
    .maincontainer1{
               
               padding-bottom: 300px;
             }
   }
</style>