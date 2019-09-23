import { isFunc } from "./type";
import { warn } from "./log";
// 日期格式化
export const dateFormate = (
  _date = new Date(),
  fmt = "yyyy-MM-dd hh:mm:ss"
) => {
  const date = new Date(_date);
  const o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

//函数防抖 函数防抖是在最后一次事件后才触发一次函数
export function debounce(func, delay = 300, I = null) {
  return () => {
    clearTimeout(I);
    I = setTimeout((...args) => func(...args), delay);
  };
}
//多维数组摊平
export function flatten(arr) {
  return [].concat(...arr.map(_ => (Array.isArray(_) ? flatten(_) : _)));
}

//函数节流 过滤重复滚动事件
//函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数
export function throttle(func, delay = 60) {
  let lock = false;
  return (...args) => {
    if (lock) return;
    func(...args);
    lock = true;
    setTimeout(() => (lock = false), delay);
  };
}

//  柯里化函数
//  对于curry(foo) , g函数参数参数足够4个
//  就调用foo(a,b,c,d)
//  如果小于就返回一个可以累计参数的函数
export const curry = func => {
  const g = (...allArgs) =>
    allArgs.length >= func.length
      ? func(...allArgs)
      : (...args) => g(...allArgs, ...args);
  return g;
};

export async function handlerPromise(func) {
  try {
    const data = await func();
    return [data, null];
  } catch (err) {
    return [null, true];
  }
}

// 只执行一次
export function once(func) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      func.apply(this, arguments);
    }
  };
}

// 横竖屏切换的回调钩子
export function orientate(func1, func2) {
  if (!isFunc(func1) || !isFunc(func2)) {
    warn("orientate函数 接受2个回调函数 你传的参数不符合函数类型");
  }
  window.addEventListener(
    "onorientationchange" in window ? "orientationchange" : "resize",
    () => {
      if (window.orientation === 180 || window.orientation === 0) {
        // "竖屏状态！
        func1();
        return;
      }
      if (window.orientation === 90 || window.orientation === -90) {
        // "横屏状态！
        func2();
        return;
      }
    },
    false
  );
}

// 判断是否在移动端
export function isMobile() {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
}

// 判断是否竖屏
export function isMatches() {
  const mql = window.matchMedia("(orientation: portrait)");
  return !mql.matches;
}

export function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}

export function generateUUID() {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); // use high-precision timer if available
  }
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
