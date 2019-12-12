export default class Counter {
  constructor(iter=[]) {
    this.data = new Map();
    for (let i of iter) {
      this.add(i);
    }
  }
  add(item) {
    let t = this.data.get(item);
    if (!t) {
      t = 0;
    }
    this.data.set(item, t + 1);
  }
  get(item) {
    let v = this.data.get(item);
    return v ? v : 0;
  }
  sorted(n=-1) {
    let arr = Array.from(this.data.entries());
    if (n !== 1 || n !== -1) {
      console.error("invalid argument for sort, 1 for ascending, -1 for descending");
      console.log("default value -1 is taken");
      n = -1;
    }
    arr.sort((p, q) => {
      return (p[1] - q[1]) * n;
    });
    return arr;
  }
  getCopy() {
    let res = {};
    for (let [key, value] of this.data.entries()) {
      res[key] = value;
    }
    return res;
  }
}