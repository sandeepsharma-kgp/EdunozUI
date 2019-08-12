<template>
  <div class="upcoming_web" style="margin:50px;" >
    <h3 align=center>Upcoming Webinar</h3>
    <div>
    <b-card-group deck >
      <b-card  style="border:none">
        <div id="d1">
        <b-img 
        
        :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
        class="img-fluid"
        fluid
        alt="responsive image"
      ></b-img>
        <b-card-text align=center style="margin-top:15px">
      <label id="title">Title&nbsp;-&nbsp;</label>   
      <label id="nm">Lorem ipsum</label><br>
      <label id="date">Date&nbsp;-&nbsp;</label>   
      <label id="dt" >24 October 2019</label><br>
      <label id="time">Time&nbsp;-&nbsp;</label>   
      <label id="tm" >5 PM, IST</label><br>
    </b-card-text>
        <div id="btn2" class=" p-4 pr-4" align=center>
            <button
                class="btn- btn-block pl-4 pr-4"
                type="submit"
                style="background:#FF7340; height:50px;color:white;border-radius:2px;"
              >See Deatils</button>
        </div>
        </div>
      </b-card>
      <b-card style="border:none;">
        <b-img 
        
        :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
        class="img-fluid"
        fluid
        alt="responsive image"
      ></b-img>
        <b-card-text align=center style="margin-top:15px">
      <label id="title">Title&nbsp;-&nbsp;</label>   
      <label id="nm">Lorem ipsum</label><br>
      <label id="date">Date&nbsp;-&nbsp;</label>   
      <label id="dt" >24 October 2019</label><br>
      <label id="time">Time&nbsp;-&nbsp;</label>   
      <label id="tm" >5 PM, IST</label><br>
    </b-card-text>
        <div id="btn2" class=" p-4 pr-4" align=center>
            <button
                class="btn- btn-block pl-4 pr-4"
                type="submit"
                style="background:#FF7340; height:50px;color:white;border-radius:2px;"
              >See Deatils</button>
        </div>
      </b-card>
      <b-card style="border:none;">
        <b-img 
        :src="require('../../assets/images/aerial-desk-device-1011329.jpg')"
        class="img-fluid"
        fluid
        alt="responsive image"
      ></b-img>
        <b-card-text align=center style="margin-top:15px">
      <label id="title">Title&nbsp;-&nbsp;</label>   
      <label id="nm">Lorem ipsum</label><br>
      <label id="date">Date&nbsp;-&nbsp;</label>   
      <label id="dt" >24 October 2019</label><br>
      <label id="time">Time&nbsp;-&nbsp;</label>   
      <label id="tm" >5 PM, IST</label><br>
    </b-card-text>
        <div id="btn2" class="p-4 pr-4" align=center>
            <button
                class="btn- btn-block pl-4 pr-4"
                type="submit"
                style="background:#FF7340; height:50px;color:white;border-radius:2px;"
              >See Deatils</button>
        </div>
      </b-card>
    </b-card-group>
  </div>
  </div>
</template>

<style scoped>
.img-fluid{
  width:427.73px;
  height:268px;
}
#title,#date,#time{
  font-weight:bold;
  font-size:20px;
}
#nm,#dt,#tm{
font-size:18px;
}
@media only screen and (min-width:330px){
  #btn2{
    width: 230px;
    height: 50px;
    margin-top: 0px;
    margin-left:0px;
  }
  .img-fluid{
    height:150px ;
  }
  
  #title,#date,#time{
    font-size: 16px;
  }
  #nm,#dt,#tm{
  font-size:14px;
}
}


@media only screen and (min-width:411px){
  #btn2{
    width: 230px;
    height: 50px;
    margin-top: 0px;
    margin-left:30px;
  }
  .img-fluid{
    height:150px ;
  }
  
  #title,#date,#time{
    font-size: 16px;
  }
  #nm,#dt,#tm{
  font-size:14px;
}
}
@media only screen and (max-width:320px){
  #btn2{
    width: 190px;
    height: 50px;
    margin-top: 0px;
    margin-left:0px;
  }
  .img-fluid{
    height:150px ;
  }
  
  #title,#date,#time{
    font-size: 16px;
  }
  #nm,#dt,#tm{
  font-size:14px;
}
}
@media only screen and (min-width:760px){
  #btn2{
    width: 180px;
    margin-top:0px;
    margin-left:0px
    
  }
  .img-fluid{
    height:200px;
  }
  #title,#date,#time{
    font-size: 16px;
  }
  #nm,#dt,#tm{
  font-size:14px;
}
}
@media only screen and (min-width:1024px){
  #btn2{
    width: 180px;
    margin-top:0px;
    margin-left:30px
    
  }
  .img-fluid{
    height:200px;
  }
  #title,#date,#time{
    font-size: 16px;
  }
  #nm,#dt,#tm{
  font-size:14px;
}
}
</style>

