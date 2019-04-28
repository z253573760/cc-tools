let uid = 0;
export default class Dep {
  constructor() {
    this.id = uid++;
    this.subs = []; // Array<Watcher>;
  }
  //sub: Watcher
  addSub(sub) {
    this.subs.push(sub);
  }
  //sub: Watcher
  removeSub(sub) {
    const index = this.subs.indexOf(sub);
    if (index <= -1) return;
    this.subs.splice(index, 1);
  }
  // 派发更新，
  notify() {
    this.subs.forEach(watch => watch.update());
  }
}
// 在 Dep 上挂一个静态属性，
// 这个 Dep.target 的值会在调用 pushTarget 和 popTarget 时被赋值，值为当前 watcher 实例对象。
Dep.target = null;

// 维护一个栈结构，用于存储和删除 Dep.target
const targetStack = [];

// pushTarget 会在 new Watcher 时被调用
// _target ?Watcher   null 或者 watcher
export function pushTarget(_target = null) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = _target;
}

// popTarget 会在 new Watcher 时被调用
export function popTarget() {
  Dep.target = targetStack.pop();
}
