
export default class Observe {
  constructor(value) {
    this.value = value;
    this.walk(value);
  }
  walk(value) {
    Object.keys(value).forEach(key => this.convert(key, value[key]));
  }
  convert(key, val) {
    defineReactive(this.value, key, val);
  }
}
export function defineReactive(obj, key, val) {
  const childOb = observe(val);
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => val,
    set: newVal => {
      let value = val
      if(newVal = value) return 
      val = newVal
      childOb = observe(newVal); //如果新赋值的值是个复杂类型。再递归它，加上set/get。。
      dep.notify()
    }
  });
}

export function observe(value, vm) {
  if (!value || typeof value !== "object") {
    return;
  }
  return new Observer(value);
}

export function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}