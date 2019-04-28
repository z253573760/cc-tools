import directiveInit from "./directives";
import { dateFormate } from "./utils/tools";
export {
  handlerPromise,
  dateFormate,
  curry,
  throttle,
  flatten,
  debounce
} from "./utils/tools";

export {
  isUndef,
  isDef,
  isTrue,
  isFalse,
  isPrimitive,
  isObject,
  isPromise
} from "./utils/type";

export default {
  install(Vue) {
    directiveInit(Vue);
    Vue.filter("dateFormate", dateFormate);
  }
};
