// recreate random dog from /customFetch part, but using redux

import React, { useEffect, useCallback } from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { useSelector, Provider, useDispatch } from "react-redux";

const initialState = { status: "progress", url: null, message: null };

const fetchRequest = (url, options) => async dispatch => {
  dispatch({ type: "FETCH_START" });
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    dispatch({ type: "FETCH_SUCCESS", url: json.message });
  } catch (err) {
    dispatch({ type: "FETCH_ERROR", error: err.message });
  }
};

function dogReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, status: "progress", url: null };
    case "FETCH_ERROR":
      return { ...state, status: "error", url: null };
    case "FETCH_SUCCESS":
      return { ...state, status: "ready", url: action.url };
    default:
      return state;
  }
}

const store = createStore(dogReducer, applyMiddleware(thunk));

const DogApp = () => {
  const dispatch = useDispatch();

  const status = useSelector(state => state.status);
  const url = useSelector(state => state.url);

  const fetchDog = useCallback(
    fetchRequest("https://dog.ceo/api/breeds/image/random"),
    []
  );

  useEffect(() => {
    dispatch(fetchDog);
  }, [dispatch, fetchDog]);

  if (status === "error") {
    return <button onClick={() => dispatch(fetchDog)}>Try again</button>;
  } else if (status === "progress") {
    return "Loading...";
  }

  return <img alt="dog" onClick={() => dispatch(fetchDog)} src={url} />;
};

const Main = () => (
  <Provider store={store}>
    <DogApp />
  </Provider>
);

export default Main;
