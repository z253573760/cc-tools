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
    return [null, err.message];
  }
}
