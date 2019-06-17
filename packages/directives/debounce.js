import { debounce } from "../utils/tools";

//解锁的防抖事件
const EVENT_NAMES = ["input", "keydown", "click"];

// 处理传入的指令的修饰符

// 给el元素添加防抖函数事件
function addEventListenerOfDebounce(eventName, el, func, time) {
  let timer = null;
  el.$debounce = event => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => func(event), time);
  };
  el.addEventListener(eventName, el.$debounce);
}
// 2个数组取交集
function getIntersection(arr1, arr2) {
  return arr1.filter(v => arr2.includes(v));
}
// event 修饰符 处理
function handlerEvent(el, value, intersection, time) {
  for (const item of intersection) {
    addEventListenerOfDebounce(item, el, value, time);
  }
}

export default {
  bind(el, { value, modifiers, arg }) {
    const time = arg || 300;
    const intersection = getIntersection(
      EVENT_NAMES,
      Object.keys(modifiers)
    ).filter(_ => _ !== "event");

    // 如果添加了event 修饰符 则传入event 对象
    if (modifiers.event) {
      handlerEvent(el, value, intersection, time);
      return;
    }
    el.$debounce = debounce(value, time);
    for (const item of intersection) {
      el.addEventListener(item, el.$debounce);
    }
  },
  unbind(el, { modifiers }) {
    // 取交集 =>  得到eventNames 和 modifiers
    const intersection = getIntersection(
      EVENT_NAMES,
      Object.keys(modifiers)
    ).filter(_ => _ !== "event");
    for (const item of intersection) {
      el.removeEventListener(item, el.$debounce);
    }
  }
};
