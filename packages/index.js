import debounce from "./directives/debounce";

export default {
  install(Vue) {
    Vue.directive("debounce", debounce);
  }
};
