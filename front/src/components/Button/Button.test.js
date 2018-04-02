import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Button from "./index";

describe("<Button />", () => {
  const label = "Test";
  const mockOnClick = jest.fn();
  const component = shallow(<Button label={label} onClick={mockOnClick} />);

  it("renders and matches the snapshot", () => {
    const component = renderer.create(<Button label="Test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("contains the supplied label", () => {
    expect(component.text()).toContain(label);
  });

  it("calls the supplied onClick callback when clicked", () => {
    component.simulate("click");
    expect(mockOnClick).toHaveBeenCalled();
  });
});
