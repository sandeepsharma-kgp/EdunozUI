<template>
  <div class="speaker">
    <div >
      <b-img id="img1"
        :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
        class="img-fluid"
        fluid
        alt="responsive image"
        align="right"
        rounded="circle"     
      ></b-img>
    </div>
    <b-card-text > 
        <div class="d1">
            <br> <br> <br>
      <label class="name">Name</label>   
      <div>
        <h6
          class="cls_h"
        >Lorem ipsum doler sit amet ,consectuter adipsciling edit</h6>
      </div>
      <br>
      <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora quasi maiores vitae, sequi asperiores! Iure placeat, voluptates nam totam temporibus eveniet voluptas maiores, magnam vitae quibusdam qui laborum blanditiis.voluptates nam totam temporibus eveniet voluptas maiores, magnam vitae quibusdam qui laborum blanditiis. </p>
        </div>
    </b-card-text>
    
  </div>
</template>

<style  scoped>
.speaker{
  width:100%;
  height:100%;
}
.img-fluid{
  max-width:400px; 
  height:400px;
  margin:0px;
}
.d1{
  padding:60px 30px  40px 80px;
  margin-right:450px;
}
.name{
  font-weight:bold;
  font-size:20px;
}
.cls_h{
  font-weight:bold;
  color:red;
}
.para{

}
 @media only screen and (max-width:770px){
   .speaker{
     width:290px;
     height:170px;
   }
  .img-fluid{
    width: 101px;
    height:101px;
    align-content: left;
    margin-right: 100px;
  }
  .d1{
  margin-right:3px;
  padding:0px 0px  10px 10px;
}
.name{
  font-weight:bold;
  font-size:13px;
  margin-left: 110px;

}
.cls_h{
  font-weight:bold;
  font-size:10px;
  color:red;
}
.para{
  font-size:10px;
}

}
@media only screen and (max-width:1024px){
   .speaker{
   }
  .img-fluid{
    width: 251px;
    height:251px;
    align-content: left;
    margin-right:0px;
    margin: 20px;
  }
  .d1{
  margin-right:3px;
  padding:0px 0px  10px 10px;
}
.name{
  font-weight:bold;
  font-size:20px;
  margin-left:0px;

}
.cls_h{
  font-weight:bold;
  font-size:13px;
  color:red;
}
.para{
  font-size:13px;
}

}
</style>
