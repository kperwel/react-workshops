import React from "react";

/**
 * You can pass everything that can be passed to functions, that means
 * - number
 * - string
 * - symbol
 * - object (classes/functions and arrays, maps, sets too)
 * - boolean
 * - undefined
 * - null
 */

const Component = ({ value }) => {
  console.log(value);

  return <span>Empty component just to console.log props during render</span>;
};

const ComponentWithMultipleProps = ({ value, anotherValue }) => {
  console.log(value, anotherValue);

  return <span>Empty component just to console.log props during render</span>;
};

const values = {
  value: "value",
  anotherValue: "anotherValue"
};

const Main = () => (
  <>
    <Component value="text" />
    <Component value={42} />
    <>
      <Component value={() => {}} />
      <Component value={{}} />
      <Component value={class Class {}} />
    </>
    <>
      <Component value={true} />
      <Component value />
    </>
    <Component value={Symbol("symbol")} />
    <Component value="text" />
    <Component value={<div>ReactNode</div>} />
    {/* You ca  use spread operator to pass multiple props at once */}
    <ComponentWithMultipleProps {...values} />
  </>
);

export default Main;
