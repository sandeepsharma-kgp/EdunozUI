
<template>
  <div class="course">
    <div>
  <b-card >
    <b-tabs style="background: #2A326D;">
      <b-tab class="" title="Course Syllabus" >
        <b-card >
          <div>
            
        <b-img :src="require('../../assets/images/aerial-desk-device-1011329.jpg')" class="img-fluid p-4" fluid alt="responsive image" style="max-width:731px;" align="right" ></b-img>
        
        </div>
        <b-card-text>
         <strong> <p style=" font-size:24px">Overview </p></strong>
          <ul align:left class="text-dark">
            <li>SAP Overview</li>
            <li>ERP Overview</li>
            <li>Architecture</li>
            <li>Usecase & Implementation</li>
            <li>Life cycle</li>
          </ul>

        </b-card-text>
        <b-card-text>
         <strong> <p style="font-weight: bold; font-size:24px">Intro to ABAP </p></strong>
          <ul align:left class="text-dark">
            <li>Characteristics of ABAP and workbench Architecture</li>
            <li>Intruduction to data Dictionary</li>
            <li>Repository information</li>
            <li>ABAP statements,Creating programs and changing programs</li>
            <li>Data Dictionary</li>
          </ul>

        </b-card-text>
        <b-card-text >
         <strong> <p style="font-weight:bold;font-size:24px">Components of ABAP Dictionary </p></strong>
          <ul align:left class="">
            <li>Data Elements and Domains</li>
            <li>Intruductions</li>
            
          </ul>

        </b-card-text>
    </b-card>
      </b-tab>
      <b-tab title="Instructor">
        <b-card >  
          <div class="row" style="border-style: groove;margin:5%;padding:px">
    <div class="col-sm-2">
      <b-img :src="require('../../assets/images/aerial-desk-device-1011329.jpg')" class="img-fluid p-4" rounded="circle" fluid alt="responsive image" style="max-width:200px;height:200px" align="center" ></b-img>
    </div>
    <div class="col-sm-9 " style="padding:50px" align="left">
      <h6 style="font-weight:bold" >Name</h6>
      <p style="color:orange">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <p>hgcdgfejhfgeriufhroifl;krgotrirpotpoo</p>
    </div>
  </div>

  <div class="row" style="border-style: groove;margin:5%;padding:px">
    <div class="col-sm-2">
      <b-img :src="require('../../assets/images/aerial-desk-device-1011329.jpg')" class="img-fluid p-4" rounded="circle" fluid alt="responsive image" style="max-width:200px;height:200px" align="center" ></b-img>
    </div>
    <div class="col-sm-9 " style="padding:50px" align="left">
      <h6 style="font-weight:bold" >Name</h6>
      <p style="color:orange">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <p>hgcdgfejhfgeriufhroifl;krgotrirpotpoo</p>
    </div>
  </div>
  <div class="row" style="border-style: groove;margin:5%;padding:px">
    <div class="col-sm-2">
      <b-img :src="require('../../assets/images/aerial-desk-device-1011329.jpg')" class="img-fluid p-4" rounded="circle" fluid alt="responsive image" style="max-width:200px;height:200px" align="center" ></b-img>
    </div>
    <div class="col-sm-9 " style="padding:50px" align="left">
      <h6 style="font-weight:bold" >Name</h6>
      <p style="color:orange">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <p>hgcdgfejhfgeriufhroifl;krgotrirpotpoo</p>
    </div>
  </div>      </b-card>
          </b-tab>

          <b-tab title="FAQs">
        <b-card >
         <div>
             <b-input-group>
            <b-form-input placeholder="FAQs" style="width:80% background:grey" ></b-form-input>
            <b-button pill slot="append" class="pl-5 pr-5" style="margin-left:20px;background:#FF5733;">Post </b-button>
             </b-input-group>   
         </div>
         <div>
             <h5 align="center" style="padding:10px;text-decoration: underline;color:#2F306D;">Answer</h5>
         </div>  
         <div class="" style="border-bottom: 4px solid grey">
             <dir><h6 class="" style="font-weight:bold; color:red; padding: 30px 0px 0px 100px;"  align="left">Lorem ipsum doler sit amet ,consectuter adipsciling edit</h6></dir>
            <div class="row" style="margin-left:50px;">
                
            <div class="col-sm-2">
                
            <b-img :src="require('../../assets/images/aerial-desk-device-1011329.jpg')" class="img-fluid p-4" rounded="circle" fluid alt="responsive image" style="max-width:200px;height:200px" align="left" ></b-img>
             
            </div>
            <div class="col-sm-9 " style="padding-top:60px " align="left">
               
                <p style="color:black">Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit </p>
                
            </div>
        </div>
        </div>
       <div class="" style="border-bottom: 4px solid grey;">
             <dir><h6 class="" style="font-weight:bold; color:red; padding: 30px 0px 0px 100px;"  align="left">Lorem ipsum doler sit amet ,consectuter adipsciling edit</h6></dir>
            <div class="row" style="margin-left:50px;">
                
            <div class="col-sm-2">
                
            <b-img :src="require('../../assets/images/aerial-desk-device-1011329.jpg')" class="img-fluid p-4" rounded="circle" fluid alt="responsive image" style="max-width:200px;height:200px" align="left" ></b-img>
             
            </div>
            <div class="col-sm-9 " style="padding-top:60px " align="left">
               
                <p style="color:black">Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit </p>
                
            </div>
        </div>
        </div> </b-card>

      </b-tab>
      
    </b-tabs>
  </b-card>
</div>

  </div>
</template>

<script>
export default {
  name: 'course',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none; 
}
ul li::before {
  content: "\2022";
  color: red;
  font-weight: bold;
  display: inline-block;  
  width: 1em; 
  margin-left: -1em; 
}
.tab-title-class {
    color: #FF0000 !important;  
}

</style>
