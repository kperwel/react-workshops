import React, { useReducer, createContext, useContext } from "react";

// reducer

const reducer = (state = 0, { type }) => {
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// self made redux

const AppStateContext = createContext();

const useSelfMadeRedux = () => {
  const [state, dispatch] = useContext(AppStateContext);

  return [state, dispatch];
};

const SelfMadeReduxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <AppStateContext.Provider value={[state, dispatch]}>
      {children}
    </AppStateContext.Provider>
  );
};

// Main

const Editor = () => {
  const [_state, dispatch] = useSelfMadeRedux();

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

const Presentation = () => {
  const [state] = useSelfMadeRedux();
  return state;
};

// const PresentationInDifferentPlaceOfAppUsingSameValue = () => {
//   const [state] = useSelfMadeRedux();
//   return <span style={{ fontSize: Math.abs(state) + 10 }}>{state}</span>;
// };

// const CompletelyDifferentWayOfPresentingSameData = () => {
//   const [state] = useSelfMadeRedux();
//   return (
//     <div>
//       {Array(Math.abs(state))
//         .fill("")
//         .map(_ => "#")}
//     </div>
//   );
// };

const Main = () => (
  <SelfMadeReduxProvider>
    <Editor />
    <Presentation />
    {/* <div>
      <span>
        <PresentationInDifferentPlaceOfAppUsingSameValue />
      </span>
    </div>
    <CompletelyDifferentWayOfPresentingSameData /> */}
  </SelfMadeReduxProvider>
);

export default Main;
