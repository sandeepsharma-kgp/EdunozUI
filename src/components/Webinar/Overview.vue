<template>
  <div >
    
      <b-img id="img1"
        :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
        class="img-fluid"
        fluid
        alt="responsive image"
        style="max-width:560px; height:auto;margin:10px;"
        align="right"
      ></b-img>
    
    <b-card-text>
      <label id="title">Title&nbsp;-&nbsp;</label>   
      <label id="nm">Lorem ipsum</label><br>
      <label id="date">Date&nbsp;-&nbsp;</label>   
      <label id="dt" >24 October 2019</label><br>
      <label id="time">Time&nbsp;-&nbsp;</label>   
      <label id="tm" >5 PM, IST</label><br>
      <label id="summary">Summary</label><br>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora quasi maiores vitae, sequi asperiores! Iure placeat, voluptates nam totam temporibus eveniet voluptas maiores, magnam vitae quibusdam qui laborum blanditiis.voluptates nam totam temporibus eveniet voluptas maiores, magnam vitae quibusdam qui laborum blanditiis. </p>
    </b-card-text>
    
  </div>
</template>

<style scoped> 
#title,#summary,#date,#time{
  font-weight:bold;
  font-size:20px;
}
#nm,#dt,#tm{
font-size:18px;
}
@media only screen and (max-width: 700px) {
  #img1{
    width: 340px;
    align-content: center;
    
  }
}
@media only screen and (max-width: 385px) {
  #img1{
    width: 295px;
    align-content: center;
    
  }
  #title,#summary,#date,#time{
    font-size: 16px;
  }
  #nm,#dt,#tm{
  font-size:14px;
}
}
@media only screen and (max-width: 325px) {
  #img1{
    width: 240px;
    align-content: right;
    
  }
  
}
@media only screen and (min-width: 760px) {
  #img1{
    width: 360px;
    align-content: center;
    
  }
}
</style>
