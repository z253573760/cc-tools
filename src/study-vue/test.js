function defineReactive(obj, key) {
  let val = obj[key];
  Object.defineProperty(obj, key, {
    get() {
      console.log(" === 收集依赖 === ");
      console.log(" 当前值为：" + val);
      return val;
    },
    set(newValue) {
      console.log(" === 通知变更 === ");
      console.log(" 当前值为：" + newValue);
      val = newValue;
    }
  });
}
const student = {
  name: "灿灿"
};

defineReactive(student, "name");

console.log(student.name);
