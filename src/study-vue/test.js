import { defineReactive } from "./observe";
import Dep from "./dep";
export default () => {
  const object = {};
  defineReactive(object, "name", "灿灿");
  Dep.target = function(newValue, oldValue) {
    console.log("我被添加进去了，新的值是：" + newValue);
  };
  object.name;
  object.name = "灿灿2";
  Dep.target = function(newValue, oldValue) {
    console.log("添加第二个函数，新的值是：" + newValue);
  };
  object.name;
  object.name = "灿灿3";
};
