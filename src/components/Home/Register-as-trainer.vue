<template>
    <div class="changeheight">  
      <v-app  id="inspire">
      <!-- <h5 style="font-weight: bold; color: #0e6251; 
      padding-top: 20px; text-align: center;">JOIN US AS TRAINER</h5>
      <v-container grid-list-md text-xs-center fluid>
      <v-layout col wrap>
       <v-flex class="mobile">
        <v-text-field
          v-model="Name"
          label="Name"
        ></v-text-field>
       </v-flex>

       <v-flex class="mobile" >
         <v-text-field
           v-model="Email"
           label="Email"
         ></v-text-field>
       </v-flex>
       <v-flex class="mobile" >
         <v-text-field
           v-model="PhoneNumber"
           label="Phone Number"
         ></v-text-field>

       </v-flex>
       <v-flex  class="mobile" >        
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
            <v-btn>Register</v-btn>
       </v-flex>
       
     </v-layout>
     
    </v-container>   -->
  <v-file-input multiple label="File input"></v-file-input> 
  <!-- <v-text-field
    label="File input"
    filled
    prepend-icon="mdi-camera"
  ></v-text-field> -->

</v-app>
  </div>
        

  
</template>
<script>

export default {
    data()
    {
        return{
            courses: [],
            items: ['Java', 'Python', 'Digital Marketing', 'Data Science'],            
        }
    }
};
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