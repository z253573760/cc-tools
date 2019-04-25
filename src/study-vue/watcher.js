export default class Watcher {
  constructor(vm, expOrFn, cb) {
    this.cb = cb;
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.value = this.get();
  }
  update() {
    this.run();
  }
  run() {
    const value = this.get();
    if (value !== this.value) {
      this.value = value;
      this.cb.call(this.vm);
    }
  }
  get() {
    const value = this.vm._data[this.expOrFn];
    return value;
  }
}
