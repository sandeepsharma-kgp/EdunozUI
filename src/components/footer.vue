
<template lang="en">
    <b-container fluid class="footer-container">
        <b-row align-self = "start">
            <b-col class="reach-us-box1" md="6">
            <div class="reach-us-container">
                <h4 class="reach-us">Reach Us</h4>
                <a href="default.asp">
                <img
                src="@/assets/icons/google-plus.png"
                alt="Get Details"
                class="icons"          
                />
             
                </a><a href="default.asp">
                <img
                src="@/assets/icons/fb.png"
                alt="Get Details"
                class="icons"          
                />
             
                </a><a href="default.asp">
                <img
                src="@/assets/icons/linkedin.png"
                alt="Get Details"
                class="icons"          
                />
              
                </a><a href="default.asp">
                <img
                src="@/assets/icons/twitter.png"
                alt="Get Details"
                class="icons"          
                />
              
                </a>

                <div>
                <br>
                <h4 class="text_align" style="font-weight: bold; padding-left: ca">Great Faculty</h4>
                </div>
                <br>
                <p class="text_align">some text for reach us and Great Faculty,some text for reach us and Great Faculty.
                    some text for reach us and Great Faculty
                </p>
                </div>
                <br>
                <a href="default.asp" style="color: white;"><u>Blogs</u></a>&ensp;&ensp;&ensp;<a href="default.asp" style="color: white;"><u>Terms&amp;Conditions</u></a>&ensp;&ensp;&ensp;<a href="default.asp" style="color: white;"><u>Privacy&nbsp;Policy</u></a>
                <br>
                <br>
            </b-col>
            <b-col md="6" align-self="center">
                <google-map style="height: 300px"></google-map>
            </b-col>            
        </b-row>
    </b-container>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
export default {
  name: "footer-bar",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.reach-us-container {
  max-width: auto;
}
.reach-us{
  font-weight: bold; 
  text-align: left;
}
#t1{
    -moz-tab-size:3;
    -o-tab-size: 3;
    tab-size: 3;
}
.footer-container {
  background-color: #060e47;
  padding: 40px 10% 40px 10%;
  color: white;
}
.text_align{
  text-align: left ;
}
.icons{
    width:48px;
    height:48px;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;

}
@media (max-width: 414px) {
  .reach-us-box1 {
    padding-left: 0px;
    text-align: center;
  }
  .text_align{
    text-align: left;
    margin-left: 18px;
  }
  .reach-us{
    text-align: center;
  }
  .icons{
    margin: 13px
  }
}
</style>

