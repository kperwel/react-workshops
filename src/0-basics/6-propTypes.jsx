import React from "react";
import PropTypes from "prop-types";
// Simply speaking runtime property types checking on development mode
// Here is better description of propTypes https://github.com/facebook/prop-types

const Component = ({ text }) => <span>{text}</span>;

Component.propTypes = {
  text: PropTypes.string,
  score: PropTypes.number,
  object: PropTypes.shape({
    text: PropTypes.string,
    number: PropTypes.number
  })
};

// --------------------- MAIN ---------------------
const Main = () => (
  <>
    {/* Warning: Failed prop type: Invalid prop `text` of type `number` supplied to `Component`, expected `string`. */}
    <Component
      text={"Example text"}
      score={4}
      object={{ text: "text", number: 4 }}
    />
  </>
);

export default Main;
