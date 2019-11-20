import React from "react";

const styleObject = {
  background: "red",
  padding: 10
};

const ComponentWithStyles = () => (
  <div className="className" style={styleObject}>
    Text
  </div>
);

// --------------------- MAIN ---------------------

const Main = () => <ComponentWithStyles />;

export default Main;
