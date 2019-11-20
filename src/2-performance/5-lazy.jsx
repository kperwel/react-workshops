import React, { Suspense, useState } from "react";

const ExpensiveComponent = React.lazy(() =>
  import("./lazy/ExpensiveComponent")
);

const Main = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}> toggle show </button>
      <Suspense fallback={<div>Loading...</div>}>
        <section>{show && <ExpensiveComponent />}</section>
      </Suspense>
    </div>
  );
};

export default Main;
