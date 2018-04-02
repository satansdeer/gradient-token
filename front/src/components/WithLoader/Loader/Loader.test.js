import React from "react";
import renderer from "react-test-renderer";
import Loader from "./index";

describe("<Loader />", () => {
  it("renders and matches the snapshot", () => {
    const component = renderer.create(<Loader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
