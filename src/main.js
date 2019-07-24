import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from 'vuetify';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import firebase from 'firebase';
Vue.use(VueAwesomeSwiper)


const config = {
  apiKey: "AIzaSyCVfvwhL_I9syRjYbhZ0Pk9egifhgkuDog",
    authDomain: "eduauth-826a4.firebaseapp.com",
    databaseURL: "https://eduauth-826a4.firebaseio.com",
    projectId: "eduauth-826a4",
    storageBucket: "eduauth-826a4.appspot.com",
    messagingSenderId: "325003081008",
    appId: "1:325003081008:web:489f32c87f0390d4"
}
firebase.initializeApp(config);


// require styles
Vue.use(Vuetify)
Vue.use(BootstrapVue);
Vue.component('GoogleMap', GoogleMap);
Vue.config.productionTip = false;

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'
// main.styl
// @import '~vuetify/src/stylus/main' // Ensure you are using stylus-loader

window.EventBus = new Vue({
  data(){
    return {
      sanfrancisco: [37.78268, - 122.41136]
    }
  }
});
import GoogleMap from '@/components/Home/GoogleMap.vue'
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
