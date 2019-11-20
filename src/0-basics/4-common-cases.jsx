import React from "react";

const ConditionalRendering = ({ value }) =>
  value ? (
    <span>Empty component just to console.log props during render</span>
  ) : null;

const ConditionInside = ({ value }) => (
  <div>
    <span>{value && <div>conditinal div</div>}</span>
  </div>
);

// life hack for props debugging
const FastDebugging = ({ value }) =>
  console.log("Debugging props print", value) || <div>{value}</div>;

const Main = () => (
  <>
    <ConditionInside value={true} />
    <ConditionalRendering value={true} />
    <FastDebugging value={true} />
  </>
);

export default Main;
