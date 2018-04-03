import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import stores from "./stores";

jest.mock("./stores", () => {
  return {
    gradientTokenStore: { tokens: [] },
    modalStore: { hideModal: jest.fn(), modal: { show: false } }
  };
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
