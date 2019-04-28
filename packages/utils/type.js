//是否未被定义, 如果参数等于undefined或者为空，返回true
export function isUndef(v) {
  return v === undefined || v === null;
}

//是否定义,如果参数不等于undefined或者为空，返回true
export function isDef(v) {
  return v !== undefined && v !== null;
}

export function isTrue(v) {
  return v === true;
}

export function isFalse(v) {
  return v === false;
}

// 判断是否是函数
export function isFunc(v) {
  return typeof v === "function";
}
//是否为原始类型，typeof 返回
export function isPrimitive(v) {
  return (
    typeof v === "string" ||
    typeof v === "number" ||
    typeof v === "symbol" ||
    typeof v === "boolean"
  );
}

// 判断是否为对象
export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

// 判断是否为promise
export function isPromise(val) {
  return (
    isDef(val) &&
    typeof val.then === "function" &&
    typeof val.catch === "function"
  );
}
