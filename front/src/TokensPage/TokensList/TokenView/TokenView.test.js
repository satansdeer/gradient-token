import React from "react";
import renderer from "react-test-renderer";
import TokenView from "./index";

describe("<TokenView />", () => {
  it("renders and matches the snapshot", () => {
    const component = renderer.create(<TokenView token={["#000", "#fff"]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
