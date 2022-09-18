import {makeAutoObservable, makeObservable} from 'mobx';

//makeAutoObservable -
//makeObservable -

class Counter {
  timer = 60
  count = 0; // переменная которая является состоянием
  constructor() {
    makeAutoObservable(this)
  }

  //экшены меняющие состояние
  increment() {
    this.count = this.count + 1
    // console.log('increm', this.count);
  };

  decrement() {
    this.count = this.count - 1
  };

  //computed свойство
  get total() {
    return `Count + timer = ` + this.timer + this.count
  }

}

export default new Counter()