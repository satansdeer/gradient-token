import React from "react";
import { shallow } from "enzyme";
import { Provider } from "mobx-react";
import renderer from "react-test-renderer";
import TokensPage from "./index";

describe("<TokensPage />", () => {
  const gradientTokenStore = {
    mintToken: jest.fn(),
    tokens: []
  };
  const modalStore = {
    showModal: jest.fn()
  };
  const stores = { gradientTokenStore, modalStore };

  it("renders and matches the snapshot", () => {
    const component = renderer.create(
      <Provider {...stores}>
        <TokensPage />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
