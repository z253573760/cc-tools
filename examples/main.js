import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import Vue from "vue";
import Cc from "@zhoucanyu/cc-tools";
Vue.use(Cc);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
