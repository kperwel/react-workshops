import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Component } from "../4-snapshot-testing";

test("Should match provided snapshot", async () => {
  const { asFragment } = render(
        <Component />
  );

  expect(asFragment()).toMatchSnapshot()
});
