import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './js/App.vue';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.config.errorHandler = function (err, vm, info) {}
Vue.config.warnHandler = function (msg, vm, trace) {}
new Vue({
  render: h => h(App)
}).$mount('#app');