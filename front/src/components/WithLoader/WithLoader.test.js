import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import WithLoader from "./index";
import Loader from "./Loader";

describe("<WithLoader />", () => {
  it("renders children when isLoading is false", () => {
    const wrapper = shallow(
      <WithLoader isLoading={false}>
        <div className="test" />
      </WithLoader>
    );
    expect(wrapper.contains(<div className="test" />)).toEqual(true);
    expect(wrapper.contains(<Loader />)).toEqual(false);
  });

  it("renders loader when isLoading is true", () => {
    const wrapper = shallow(
      <WithLoader isLoading={true}>
        <div className="test" />
      </WithLoader>
    );
    expect(wrapper.contains(<Loader />)).toEqual(true);
    expect(wrapper.contains(<div className="test" />)).toEqual(false);
  });
});
