// additional tools are needed to handle async flow in redux

import React from "react";
import thunk from "redux-thunk";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// ACTION_CREATORS

const incrementStart = () => (dispatch, getState) => {
  if (getState().status === "progress") {
    return;
  }

  dispatch({ type: "INCREMENT_START" });
  return new Promise(resolve => {
    setTimeout(() => {
      dispatch(incrementSuccess());
      resolve();
    }, 200);
  });
};

const incrementSuccess = () => ({ type: "INCREMENT_SUCCESS" });

// INITIAL STATE

const initialState = {
  status: "ready",
  value: 0
};

// REDUCER

function counter(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT_START":
      return { ...state, status: "progress" };
    case "INCREMENT_SUCCESS":
      return { ...state, status: "ready", value: state.value + 1 };
    default:
      return state;
  }
}

// STORE

const store = createStore(counter, applyMiddleware(thunk));

// COMPONENTS

const Editor = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.status);

  const startIncrement = () => {
    dispatch(incrementStart());
  };

  return (
    <div>
      <button onClick={startIncrement}>increment</button>
    </div>
  );
};

const App = () => {
  const value = useSelector(state => state.value);
  const status = useSelector(state => state.status);

  return (
    <div>
      Another counter: {value}
      <br />[{status}]
    </div>
  );
};

const Main = () => (
  <Provider store={store}>
    <Editor />
    <App />
  </Provider>
);

export default Main;
