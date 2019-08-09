<template>
  <div>
    <div>
      <b-input-group>
        <b-form-input placeholder="FAQs" style="width:50%;background:#e0e0d1;"></b-form-input>
        <b-button
          id="btn_id"
          slot="append"
          style="margin-left:30px;background:#FF5733;border-radius:5px;width:100%"
        >Post</b-button>
      </b-input-group>
    </div>
    <div>
      <h5 align="center" style="padding:10px;text-decoration: underline;color:#2F306D;">Answer</h5>
    </div>
    <div id="bx1" class style="border-bottom: 4px solid grey">
      <div>
        <h6
          class
          style="font-weight:bold; color:red; padding: 030px 0px 0px 50px;"
          align="left"
        >Lorem ipsum doler sit amet ,consectuter adipsciling edit</h6>
      </div>
      <div class="row" style="margin-left:20px;">
        <div class="col-sm-2">
          <b-img
            :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
            class="img-fluid p-4"
            rounded="circle"
            fluid
            alt="responsive image"
          ></b-img>
        </div>
        <div id="p1" class="col-sm-9" style="padding-top:60px " align="left">
          <p
            style="color:black"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit</p>
        </div>
      </div>
    </div>
    <div class style="border-bottom: 4px solid grey;">
      <div>
        <h6
          class
          style="font-weight:bold; color:red; padding: 30px 0px 0px 50px;"
          align="left"
        >Lorem ipsum doler sit amet ,consectuter adipsciling edit</h6>
      </div>
      <div class="row" style="margin-left:20px;" align="center">
        <div class="col-sm-2" >
          <b-img
            :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
            class="img-fluid p-4"
            rounded="circle"
            fluid
            alt="responsive image"
          ></b-img>
        </div>
        <div id="p1" class="col-sm-9" style="padding-top:60px " align="left">
          <p
            style="color:black"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit Done</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-fluid{
      max-width:200px;
      height:200px
}
@media only screen and (max-width: 1250px) {
  #p1 {
    padding-left: 10%;
  }
  #bx1{
      align:center;
      
  }
}
@media only screen and (max-width:575px){
  .img-fluid{
    align-self: center;
  }
}
@media (min-width:600px) and (max-width:800px) {
  #p1{
     margin-top:-200px;
     margin-right:80px;
     margin-left: 150px
      
    
     
  }
}
</style>
