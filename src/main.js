import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
Vue.use(BootstrapVue);
import BootstrapVue from "bootstrap-vue";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.component('GoogleMap', GoogleMap);
Vue.config.productionTip = false;
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
