import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import TokensList from "./index";

describe("<TokensList />", () => {
  const mockGradientTokenStore = {
    tokens: [{ index: 0, gradient: ["#fff", "#000"] }]
  };
  const mockModalStore = {
    modalStore: jest.fn()
  };

  it("renders and matches the snapshot", () => {
    const component = renderer.create(
      <TokensList.wrappedComponent
        gradientTokenStore={mockGradientTokenStore}
        modalStore={mockModalStore}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
