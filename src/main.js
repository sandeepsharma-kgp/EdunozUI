import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from 'vuetify'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

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
