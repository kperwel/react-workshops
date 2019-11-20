import React from "react";

/*
    Class:
    + easy to understand for people familiar with OOP

    Functional:
    + are quite small
    + reduce "this" problems
    + less code after Babel transpilation
    + more reusable hook concept
    
*/

/**
 * Class
 */
class ClassComponent extends React.Component {
  render() {
    return <span>class component</span>;
  }
}

// Functional

const FunctionComponent = () => <span>functional component</span>;

function SecondFunctionComponent() {
  return <span>functional component</span>;
}

// --------------------- MAIN ---------------------

const Main = () => (
  <>
    <ClassComponent />
    <FunctionComponent />
    <SecondFunctionComponent />
  </>
);

export default Main;