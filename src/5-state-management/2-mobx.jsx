import { useObservable, useObserver } from "mobx-react-lite";
import { observable, action, decorate, computed } from "mobx";
import React from "react";

class CounterModel {
  value = 0;
  increment = () => this.value++;
  decrement = () => this.value--;
  get double() {
    return this.value * this.value;
  }
}

// CRA does not support decorators notation, so we cannot use @action, @observable etc.
decorate(CounterModel, {
  value: observable,
  increment: action,
  decrement: action,
  double: computed
});

const Counter = () => {
  const model = useObservable(new CounterModel());
  return useObserver(() => (
    <div>
      {model.value} * {model.value} = {model.double}
      <br />
      <button onClick={model.increment}>increment</button>
      <button onClick={model.decrement}>decrement</button>
    </div>
  ));
};

const Main = () => <Counter />;

export default Main;
