import React from "react";
import renderer from "react-test-renderer";
import TokenImage from "./index";

describe("<TokenImage />", () => {
  it("renders and matches the snapshot", () => {
    const component = renderer.create(<TokenImage outer="#fff" inner="#000" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("adjusts size based on passed size prop", () => {
    const component = renderer.create(
      <TokenImage outer="#fff" inner="#000" size={200} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
