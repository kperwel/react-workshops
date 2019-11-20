import React, { useState, useRef } from "react";

// IMPORTANT: Make sure if there are no other solutions for tasks done by HOCs (renderProps or hooks).
// Hoc were good when there was no other solutions. It is still usefull pattern,
// but have to be used wisely because of readability issues.

// ##### ControlledInputComponent

const ControlledInputComponent = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const onChange = ev => setValue(ev.target.value.toUpperCase());
//   const onChange = ev => setValue(ev.target.value);

  return (
    <div>
      <button onClick={() => onSubmit(value)}>submit</button>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

// ##### UncontrolledInputComponent

const UncontrolledInputComponent = ({ onSubmit }) => {
  const ref = useRef();
  return (
    <div>
      <button onClick={() => onSubmit(ref.current.value)}>submit</button>
      <input type="text" ref={ref} />
    </div>
  );
};

// #####

const Main = () => (
  <>
    <ControlledInputComponent onSubmit={console.log} />
    <br />
    <UncontrolledInputComponent onSubmit={console.log} />
  </>
);

export default Main;
