import React, { useState } from "react";

const Component = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>ADD ONE</button>
      <button onClick={() => setValue(value - 1)}>SUBSTRACT ONE</button>
    </div>
  );
};

// --------------------- MAIN ---------------------

const Main = () => <Component />;

export default Main;
