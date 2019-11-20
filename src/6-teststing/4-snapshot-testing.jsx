import React from "react";

export const Component = ({ name, description, onButtonClick }) => (
  <div>
    <h1>{name}</h1>
    <p>{description}</p>
    <button onClick={() => onButtonClick(name)}>User action button</button>
  </div>
);
