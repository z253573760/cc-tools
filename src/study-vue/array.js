//  数组主要的操作场景还是遍历，
//  而对于每一个元素都挂载一个 get 和 set 方法，恐怕也是不小的性能负担。
const methods = [
  "push",
  "pop",
  "shift",
  "unshift",
  "sort",
  "reverse",
  "splice"
];

const injackingPrototype = Object.create(Array.prototype);
console.log(injackingPrototype);
methods.forEach(method => {
  const originArrayMethod = arrayProto[method];
  injackingPrototype[method] = function(...args) {
    const result = originArrayMethod.apply(this, args);
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);
        break;
    }
    if (inserted) {
      // 对于新增的元素，继续劫持
      // ob.observeArray(inserted)
    }
    // 通知变化
    return result;
  };
});
