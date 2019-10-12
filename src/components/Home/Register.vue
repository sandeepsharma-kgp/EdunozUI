<template>
    <div class="maincontainer">  
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
          label="Name"
        ></v-text-field>
       </v-flex>

       <v-flex  class="mobile">
         <v-text-field 
           v-model="email"
           label="Email"
         ></v-text-field>
       </v-flex>
       <v-flex class="mobile" >
         <v-text-field 
           v-model="phone_no"
           label="Phone Number"
         ></v-text-field>

       </v-flex>
       <v-flex   class="mobile">        
         <v-select
            v-model="courses"
            :items="items"
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
  </div>
  
</template>
<script>
import { studentsCollection } from '../../firebaseConfig';

export default {
    data()
    {
        return{
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
        alert(this.courses);
        studentsCollection.add({
          name : this.name,
          email : this.email,
          phone_no: this.phone_no,
          courses: this.courses
        }).then(this.$router.push('/'))
        
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