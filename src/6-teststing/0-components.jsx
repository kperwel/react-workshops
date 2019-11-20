import React from "react";
import { useSelector } from 'react-redux'

export const Component = ({ name, description, onButtonClick }) => (
  <div>
    <h1>{name}</h1>
    <p>{description}</p>
    <button onClick={() => onButtonClick(name)}>User action button</button>
  </div>
);

export const ReduxComponent = () => {
  const state = useSelector(state => state);
  return <div>{state}</div>;
};
