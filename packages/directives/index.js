import debounce from "./debounce";
import visibility from "./visibility";
import textHide from "./text-hide";
import time from "./time";
export default Vue => {
  Vue.directive("debounce", debounce);
  Vue.directive("visibility", visibility);
  Vue.directive("text-hide", textHide);
  Vue.directive("time", time);
};
