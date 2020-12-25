import { makeAutoObservable } from 'mobx';

class Test {
  constructor() {
    makeAutoObservable(this);
  }

  counter = 0;

  increase() {
    this.counter++;
    // console.log(this.counter);
  }

  decrease() {
    this.counter--;
    // console.log(this.counter);
  }
}

export default new Test();
