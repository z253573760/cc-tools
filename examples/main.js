import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import lib from "../lib/vue-tools.umd.min.js";
console.log(lib);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
