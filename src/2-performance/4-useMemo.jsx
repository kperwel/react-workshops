import React, { useState, useMemo } from "react";

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

function expensiveCalculationsBasedOnNumber(n) {
  sleep(1000);
  return n * 2;
}

const Component = () => {
  const [number, setNumberOfClicks] = useState(0);
  const [independentNumber, setIndependentNumber] = useState(0);

  const expensiveResultBasedOnNumber = useMemo(
    () => expensiveCalculationsBasedOnNumber(number),
    [number]
  );
//   const expensiveResultBasedOnNumber = expensiveCalculationsBasedOnNumber(number);

  return (
    <div>
      expensiveCalculations({number}) = {expensiveResultBasedOnNumber}
      <br />
      <br />
      Number not used in calculations = {independentNumber}
      <br />
      <br />
      <button onClick={() => setNumberOfClicks(number + 1)}>ADD 1 TO EXPENSIVE NUMBER</button>
      <button onClick={() => setIndependentNumber(independentNumber + 1)}>
        ADD 1 TO INDEPENDENT NUMBER
      </button>
    </div>
  );
};

// --------------------- MAIN ---------------------

const Main = () => <Component />;

export default Main;
