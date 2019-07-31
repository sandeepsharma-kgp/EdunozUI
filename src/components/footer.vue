
<template lang="en">
    <b-container fluid class="footer-container">
        <b-row align-h = "center">
            <b-col class="reach-us-box1" md="5">
            <div class="reach-us-container">
                <h4 style="font-weight: bold; text-align: center">Reach Us</h4>
                <a href="default.asp">
                <img
                src="@/assets/icons/google-plus.png"
                alt="Get Details"
                 style="width:48px;height:48px; margin: 5px;"
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
            <b-col md="7" align-self="start">
                <google-map></google-map>
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
@media (max-width: 414px) {
  .reach-us-box1 {
    padding-left: 0px;
    text-align: center;
  }
  .text_align{
    text-align: center;
  }
}
</style>

