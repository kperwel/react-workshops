import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

// const increment = () => ({ type: "INCREMENT" });
// const decrement = () => ({ type: "DECREMENT" });

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const Editor = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

const App = () => {
  const count = useSelector(state => state);

  return <div>Another counter: {count}</div>;
};

const Main = () => (
  <Provider store={createStore(counter)}>
    <Editor />
    <App />
  </Provider>
);

export default Main;
