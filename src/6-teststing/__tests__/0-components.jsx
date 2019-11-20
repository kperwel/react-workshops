import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Component, ReduxComponent } from "../0-components.jsx";

const name = "Example Name";
const description = "Lorem ipsum dolor sit ament";
const LEFT_CLICK = { bubbles: true, cancelable: true, button: 0 };

test("Displays name as a heading", async () => {
  const { getByRole } = render(<Component name={name} />);
  expect(getByRole("heading")).toHaveTextContent(name);
});

test("Displays passed description", async () => {
  const { getByText } = render(<Component description={description} />);
  expect(getByText(description));
});

test("Calls method on button click", async () => {
  const spyFunction = jest.fn();
  const { getByRole } = render(
    <Component name={name} onButtonClick={spyFunction} />
  );
  fireEvent.click(getByRole("button"), LEFT_CLICK);

  expect(spyFunction).toHaveBeenCalledWith(name);
});

test("Should test component with redux", async () => {
  const { getByText } = render(
    <Provider store={createStore(s => s, "State value")}>
      <ReduxComponent />
    </Provider>
  );

  expect(getByText("State value"));
});
