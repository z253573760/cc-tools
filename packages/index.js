import "element-ui/lib/theme-chalk/index.css";
import directiveInit from "./directives";
import mediaInit from "./plugins/match-media";
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

export { fileToBase64 } from "./utils/img";

export const TreeMenu = () => import("./components/tree-menu.vue");
export const Uploader = () => import("./components/Uploader");
const defaultOpts = {
  media: false
};
export default {
  install(Vue, $options = {}) {
    directiveInit(Vue);
    const opts = { ...defaultOpts, ...$options };
    if (opts.media) {
      mediaInit(Vue);
    }
    Vue.filter("dateFormate", dateFormate);
  }
};
