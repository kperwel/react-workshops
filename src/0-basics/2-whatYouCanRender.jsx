import React from "react";

/**
 * what You can render:
 * - numbers
 * - string
 * - array of any element from <what You can render>
 * - ReactNode
 */

const NumberValue = () => 2;
const StringValue = () => "String";
const ArrayValue = () => [1, 2, 3, 4, 5];
const ArrayOfComponentsValue = () =>
  [1, 2, 3, 4, 5].map(v => <span key={v}>value = {v}</span>);

// --------------------- MAIN ---------------------

const Main = () => (
  <>
    <NumberValue />
    <StringValue />
    <ArrayValue />
    <ArrayOfComponentsValue />
  </>
);

export default Main;
