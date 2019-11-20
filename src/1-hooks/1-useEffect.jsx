
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    return () => {
        document.title = `Clicker is not in the tree`;
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// --------------------- MAIN ---------------------

const Main = () => {
    const [exampleVisible, setExampleVisible] = useState(true);
    return (
        <div>
        <button onClick={() => { setExampleVisible(!exampleVisible) }}>Toggle Example</button>
        {exampleVisible && <Example />}
        </div>
    )
};

export default Main;
