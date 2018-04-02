import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import TokenItem from "./index";

describe("<TokenItem />", () => {
  it("renders and matches the snapshot", () => {
    const component = renderer.create(<TokenItem token={["#000", "#fff"]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls the supplied onClick callback when clicked", () => {
    const token = ["#000", "#fff"];
    const mockOnClick = jest.fn();
    const component = shallow(
      <TokenItem token={token} onClick={mockOnClick} />
    );
    component.simulate("click");
    expect(mockOnClick).toHaveBeenCalled();
  });
});
