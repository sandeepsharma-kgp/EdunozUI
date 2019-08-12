<template>
  <div class="speaker" >
    <div>
      <b-img id="img1"
        :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
        class="img-fluid"
        fluid
        alt="responsive image"
        align="right"
        rounded="circle"     
      ></b-img>
    </div>
    <b-card-text style="border-bottom: 4px solid grey " > 
        <div class="d1" >
            <br> <br> <br>
      <label class="name">Name</label>   
      <div >
        <h6
          class="cls_h"
        >Lorem ipsum doler sit amet sit amet,consectuter adipsciling edit</h6>
      </div>
      <br>
      <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora quasi maiores vitae, sequi asperiores! Iure placeat, voluptates nam totam temporibus eveniet voluptas maiores, magnam vitae quibusdam qui laborum blanditiis.voluptates nam totam temporibus eveniet voluptas maiores, magnam vitae quibusdam qui laborum blanditiis. </p>
        </div>
    </b-card-text>
    
  </div>
</template>

<style  scoped>
.img-fluid{
  max-width:200px; 
  max-height:200px;
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
    margin-right: 90px;
  }
  .d1{
  margin-right:3px;
  padding:0px 0px  10px 10px;
}
.name{
  font-weight:bold;
  font-size:15px;
  margin-left: 115px;

}
.cls_h{
  font-weight:bold;
  font-size:12px;
  color:red;
}
.para{
  font-size:12px;
}

}

@media only screen and (min-width:800px){
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
@media only screen and (max-width:320px){
  .speaker{
     width:290px;
     height:170px;
   }
  .img-fluid{
    width: 101px;
    height:101px;
    align-content: left;
    margin-right: 110px;
  }
  .d1{
  margin-right:3px;
  padding:0px 0px  10px 10px;
}
.name{
  font-weight:bold;
  font-size:15px;
  margin-left: 95px;

}
.cls_h{
  font-weight:bold;
  font-size:11px;
  color:red;
}
.para{
  font-size:11px;
}

}

</style>
