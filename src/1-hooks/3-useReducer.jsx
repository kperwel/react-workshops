import React, { useReducer, useEffect } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.dispatch = dispatch;
    return () => {
      window.dispatch = null;
    };
  }, [dispatch]);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

// --------------------- MAIN ---------------------

const Main = () => <Counter />;

export default Main;
