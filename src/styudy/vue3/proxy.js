const toProxy = new WeakMap();
const toRaw = new WeakMap();
const targetMap = new WeakMap();
const isObject = target => {
  return typeof target === "object" && target !== null;
};
const baseHandler = {
  get(target, key) {
    console.log("get", target, key);
    const res = Reflect.get(target, key);
    return isObject(res) ? reactive(res) : res;
  },
  set(target, key, val) {
    //
  }
};

const reactive = target => {
  const observe = toProxy.get(target);
  if (observe) {
    return observe;
  }

  if (toRaw.get(target)) {
    return target;
  }
  const res = createReactiveObject(target);
  toProxy.set(target, res);
  toRaw.set(res, target);
  return res;
};

const createReactiveObject = target => {
  const res = new Proxy(target, baseHandler);
  return res;
};

const obj = reactive({ a: { b: "1" } });
console.log(obj.a.b);
console.log("----------------------");
console.log(obj.a);
