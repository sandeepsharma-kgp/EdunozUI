<template>
  <div>
    <div class="row" style="border-style: groove;margin:5%;padding:px">
      <div class="col-sm-2">
        <b-img id="d2"
          :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
          class="img-fluid p-4"
          rounded="circle"
          fluid
          alt="responsive image"
          style="max-width:200px;height:200px;margin-top:20px;margin-left:10px;"
          align="center"
        ></b-img>
      </div>
      <div id="d1" class="col-sm-9" style="padding:70px;margin-left:0px" align="left">
        <h6 style="font-weight:bold">Name</h6>
        <p style="color:orange">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet.</p>
      </div>
    </div>
    <div class="row" style="border-style: groove;margin:5%;padding:px">
      <div class="col-sm-2">
        <b-img id="d2"
          :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
          class="img-fluid p-4"
          rounded="circle"
          fluid
          alt="responsive image"
          style="max-width:200px;height:200px;margin-top:20px;margin-left:10px"
          align="center"
        ></b-img>
      </div>
      <div id="d1" class="col-sm-9" style="padding:70px;margin-left:0px" align="left">
        <h6 style="font-weight:bold">Name</h6>
        <p style="color:orange">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet.</p>
      </div>
    </div>
    <div class="row" style="border-style: groove;margin:5%;padding:px">
      <div class="col-sm-2">
        <b-img id="d2"
          :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
          class="img-fluid p-4"
          rounded="circle"
          fluid
          alt="responsive image"
          style="max-width:200px;height:200px;margin-top:20px;margin-left:10px"
          align="center"
        ></b-img>
      </div>
      <div id="d1" class="col-sm-9" style="padding:70px;margin-left:0px" align="left">
        <h6 style="font-weight:bold">Name</h6>
        <p style="color:orange">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum doler sit amet.</p>
      </div>
    </div>
     </div>
</template>

<style scoped>
  @media only screen and (max-width:725px) {
  #d1{
     margin-top:5px;
     padding: 0px;
  }
}
@media only screen and (max-width:470px) {
  #d1{
     margin-top:1px;
     margin-left: 0px
  }
}
@media (min-width:500px) and (max-width:900px) {
  #d1{
     margin-top:-50px;
     margin-right:60px;
     
     
  }
}
@media (min-width:1000px) and (max-width:1025px) {
  #d1{
     margin-top:-50px;
     margin-right:80px;
      
    
     
  }
}
@media (min-width:1000px) and (max-width:1025px) {
  #d2{
     margin-left:-40px;
     margin-right:600px;
     padding: 100px
     
     
  }
}
@media only screen and (max-width:725px) {
  #d2{
     margin-bottom:-70px
  }
}
@media (min-width:300px) and (max-width:325px) {
  #d1{
     margin-left: -100px;
     padding: 0px
      
    
     
  }
}


</style>

