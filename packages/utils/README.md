### tools 工具函数

```
import { curry, throttle, flatten, debounce } from "@zhoucanyu/cc-tools";

throttle 函数节流 过滤重复滚动事件
const throttleFunc = throttle(() => console.log("节流函数"), 1000);

//函数防抖 函数防抖是在最后一次事件后才触发一次函数
const debounceFucn = debounce(() => console.log("防抖函数"), 1000);

flatten 多维数组摊平
flatten([1, [2], [3, [4]], [5, [[5]]]]); //[1,2,3,4,5,6]

//  柯里化函数
const foo = curry((a, b, c, d) => {
  console.log(a, b, c, d);
});
foo(1)(2)(3)(4) //1234
foo(1)(2)(3) // 不返回
const f = foo(1)(2)(3) //
f(5) // 1235

```
