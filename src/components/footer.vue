
<template lang="en">
    <b-container fluid class="footer-container">
        <b-row align-h = "start">
            <b-col class="reach-us-box1">
            <div class="reach-us-container">
                <h4 style="font-weight: bold">Reach Us</h4>
                <div>
                <a href="default.asp">
                <img
                src="@/assets/icons/google-plus.png"
                alt="Get Details"
                 style="width:48px;height:48px; margin: 20px 5px 20px 0;"
                />
             
                </a><a href="default.asp">
                <img
                src="@/assets/icons/fb.png"
                alt="Get Details"
                style="width:48px;height:48px; margin: 5px"
                />
             
                </a><a href="default.asp">
                <img
                src="@/assets/icons/linkedin.png"
                alt="Get Details"
                style="width:48px;height:48px; margin: 5px"
                />
              
                </a><a href="default.asp">
                <img
                src="@/assets/icons/twitter.png"
                alt="Get Details"
                style="width:48px;height:48px; margin: 5px"
                />
              
                </a>
                </div>
                <div>
                <br>
                <h4 style="font-weight: bold; text-align: left; padding-left: ca">Great Faculty</h4>
                </div>
                <br>
                <p style="text-align: left;">some text for reach us and Great Faculty,some text for reach us and Great Faculty.
                    some text for reach us and Great Faculty
                </p>
                </div>
                <br>
                <div style="text-align: left;" >
                    <pre id="t1"><a href="default.asp" style="color: white;"><u>Blogs</u></a>   <a href="default.asp" style="color: white;"><u>Terms&amp;Conditions</u></a>     <a href="default.asp" style="color: white;"><u>Privacy Policy</u></a>
                    </pre>
                </div>
            </b-col>
            <b-col align-self="start">
                <google-map></google-map>
            </b-col>            
        </b-row>
    </b-container>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
export default {
  name: "footer-bar",
  data() {
    return {}
  },
  methods: {},
};
</script>
<style scoped>
.reach-us-container{
    max-width: 21em;
}
.reach-us-box1{
    padding-left: 15%;
}
#t1{
    -moz-tab-size:4;
    -o-tab-size: 4;
    tab-size: 4;
}
.footer-container{
    background-color:#060e47; 
    padding: 40px 10% 40px 10%; 
    color: white;
}
@media (max-width: 414px){
    .reach-us-box1{
    padding-left: 0px;
    }
}
</style>

