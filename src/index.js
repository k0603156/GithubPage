import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueAnime from "vue-animejs";
import App from "./App.vue";
import store from "./store";

Vue.use(VueAnime);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.config.errorHandler = function(err, vm, info) {};
Vue.config.warnHandler = function(msg, vm, trace) {};
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
