import React from "react";

const NameLoggingButton = ({ name }) => {
  const logEvent = ev => {
    console.log(`${ev.type}: ${name}`);
  };

  return (
    <div onClick={logEvent} onMouseOver={logEvent} onMouseOut={logEvent}>
      Log me stuff
    </div>
  );
};

// --------------------- MAIN ---------------------

const Main = () => <NameLoggingButton name="Stephen!" />;

export default Main;
