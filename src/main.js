import Vue from "vue";
import VConsole from "vconsole";
import App from "./App.vue";
import router from "./router";
import Cc from "../packages";

Vue.use(Cc);
Vue.config.productionTip = false;
new VConsole();
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
