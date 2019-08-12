<template>
  <div class="webinars" id="t1">
    <div>
      <b-card-group>
        <b-card  style=" max-width:1304px;height:auto;border:none">
          <b-tabs style="background: #2A326D; border:none; border-radius:3px" >
            <b-tab title="Overview" style="border:none;border-radius:0px;">
              <b-card style="background:#f0f5f5;min-height:465px;border:none;border-radius:0px;" >
                <Overview/>
              </b-card>
            </b-tab>

          
            <b-tab class="speaker" title="About Speaker" style="border:none;border-radius:0px;">
              <b-card   style="background:#f0f5f5;height:465px;border:none;border-radius:0px;"  >
                <about_speaker/>
              </b-card>
            </b-tab>
           
            <b-tab title="FAQs" style="border:none;border-radius:0px;">
              <b-card style="background:#f0f5f5;min-height:465px;border:none;border-radius:0px;" >
                <faq/>
              </b-card>
            </b-tab>
          </b-tabs>
        </b-card>
        <div class="d1" style=" " align=center>
        <b-card  class="card2" style="border:none;">
          <div class="reg" style="">
            <h3 align="center">Register Now</h3><br>
            <div class="form-group">
              <input
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
                type="text"
                style="background: #ECEEF8; margin-bottom: 20px;"
                class="form-control"
                name="ph_no"
                required="required"
                placeholder="Phone Number"
              />
            </div>
            <div >  
            <select class="branch" >
                <option value="branch">Select Branch</option>
              </select>
            <select class="city" >
                <option value="city">Select City</option>
              </select>
              <select class="state" >
                <option value="state">Select State</option>
              </select>


            </div>
            
            <div class="form-group">
              <button
                type="submit"
                style="background:#FF7340;width:100%;height:40px; color:white;border-radius:5px;margin-top:15px"
              >Submit</button>
            </div>
          </div>
        </b-card>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import Overview from "../Webinar/Overview";
import about_speaker from "../Webinar/about_speaker";
import faq from "../Webinar/faq";

export default {
  components:{
    Overview,
    about_speaker,
    faq,
  }
}
</script>


<style scoped>
.card1{
   width:1304px;
   height:auto;
   border:none;
  
}

.reg {
  border-style: groove;
  padding:5%;
  border-radius:5px;
  width:300px;
  height:501px;
}
.branch,.city,.state{
  width:100%;
  border-style:solid;
  margin-bottom: 5%;
  padding:1.8%;
  border-radius: 3px;
  background-color:#E7E6FA;
  color: gray;

}
@media only screen and (max-width: 360px) {
  .d1{
    width: 200px;
    margin-left:20px;
  }
}
@media only screen and (max-width: 375px) {
  .d1{
    width: 200px;
  }
}
@media only screen and (min-width: 1000px) {
  .reg{
    width: 400;

  }

}
@media only screen and (max-width: 375px) {
  .reg{
    margin-right: 10px;
    width: 280px;
  }
  
}

@media only screen and (max-width:800px){
  .card1{
    width:350px;
    height:370px;
  }
}

</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->
