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
