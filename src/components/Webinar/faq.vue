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
    <div id="bx1" class="p-1" style="border-bottom: 4px solid grey">
      <div>
        <h6
          id="h_id"
          align="left"
        >Lorem ipsum doler sit amet ,consectuter adipsciling edit</h6>
      </div>
      <div class="row" style="margin-left:20px;">
        <div class="col-sm-2">
          <b-img
            :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
            class="img-fluid p-1"
            rounded="circle"
            fluid
            alt="responsive image"
            style="width:100px; height:100px"
          ></b-img>
        </div>
        <div id="p1" class="col-sm-10" style="padding-top:10px " align="left">
          <p
            style="color:black"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit</p>
        </div>
      </div>
    </div>
    <div id="bx1" class="p-1" style="border-bottom: 4px solid grey ">
      <div>
        <h6 
          id="h_id"
          align="left"
        >Lorem ipsum doler sit amet ,consectuter adipsciling edit</h6>
      </div>
      <div class="row" style="margin-left:20px;">
        <div class="col-sm-2">
          <b-img
            :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
            class="img-fluid p-1"
            rounded="circle"
            fluid
            alt="responsive image"
            style="width:100px; height:100px"
          ></b-img>
        </div>
        <div id="p1" class="col-sm-10" style="padding-top:10px " align="left">
          <p
            style="color:black"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet ,consectuter adipsciling edit</p>
        </div>
      </div>
    </div>
    </div>
  
</template>

<style scoped>
#h_id{
  font-weight:bold;
 color:red;
   padding: 10px 0px 0px 40px;
}
.img-fluid{
      max-width:200px;
      height:200px;
}
@media only screen and (max-width: 1250px) {
  #p1,
  #p2 {
    padding-left: 10%;
  }
  #bx1{
      align:center;
      
  }
}
@media only screen and (max-width:575px){
  .img-fluid{
    align-self:right;
    max-width:60px;
    max-height:60px;

  }
  #h_id{
  font-weight:bold;
  font-size: 12px;
 color:red;
   padding: 10px 0px 0px 40px;
}
#p1,
  #p2 {
    padding:0px 10px 0px 0px;
  }
p{
  font-size: 12px;
  margin-left:0px;
  padding-left: 0px;
}
}
@media only screen and (max-width: 768px) {
  #p1,
  #p2 {
    padding-left:20px;
  }
.img-fluid{
    align-self:right;
    max-width:50px;
    max-height:50px;
}
}
</style>
