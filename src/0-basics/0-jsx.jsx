// everytime we are using jsx we have to import React from 'react';
// jsx tags are transformed to React.createElement notation by Babel/tsc

import React from "react";

const WithoutJsx = () => React.createElement("div", null, "Text");

// is the same as

const WithJsx = () => <div>Text</div>;

// --------------------- MAIN ---------------------

const Main = () => (
  <>
    <WithJsx />
    {React.createElement(WithoutJsx)}
  </>
);

export default Main;
