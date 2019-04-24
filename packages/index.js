import debounce from "./directives/debounce";
export { curry, throttle, flatten, debounce } from "./utils/tools";

export default {
  install(Vue) {
    Vue.directive("debounce", debounce);
  }
};
