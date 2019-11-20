import React, { useState } from "react";

// React uses keys for diffing elements

const KeyedComponent = ({ array }) =>
  <div>{array.map(v => <span key={v}>value = {v} </span>)}</div>;

const WorseKeyedComponent = ({ array }) =>
  <div>{array.map((v, i) => <span key={i}>value = {v} </span>)}</div>

const TheWorstKeyedComponent = ({ array }) =>
  <div>{array.map(v => <span key={Math.random()}>value = {v} </span>)}</div>

// --------------------- MAIN ---------------------

const Main = () => {
  const [array, setArray] = useState([]);

  return (
    <div>
      <KeyedComponent array={array} />
      <WorseKeyedComponent array={array} />
      <TheWorstKeyedComponent array={array} />
      <br />
      <br />
      <button
        onClick={() => {
          setArray([...array, array.length + 1]);
        }}
      >
        Append element
      </button>
      <button
        onClick={() => {
          setArray([array.length + 1, ...array]);
        }}
      >
        Prepend element
      </button>
      <button
        onClick={() => {
          setArray(array.filter(v => v !== array[array.length - 1]));
        }}
      >
        Remove last element
      </button>
    </div>
  );
};

export default Main;
