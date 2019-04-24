import debounce from "./directives/debounce";
import visibility from "./directives/visibility";
import textHide from "./directives/text-hide";
export { dateFormate, curry, throttle, flatten, debounce } from "./utils/tools";
import { dateFormate } from "./utils/tools";

export default {
  install(Vue) {
    Vue.directive("debounce", debounce);
    Vue.directive("visibility", visibility);
    Vue.directive("text-hide", textHide);
    Vue.filter("dateFormate", dateFormate);
  }
};
