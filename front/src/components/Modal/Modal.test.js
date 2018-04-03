import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Modal from "./index";

describe("<Modal />", () => {
  describe("when show is true and body provided", () => {
    const mockModalStore = {
      modal: { show: true, body: <div>Test</div> },
      hideModal: jest.fn()
    };
    const component = shallow(
      <Modal.wrappedComponent modalStore={mockModalStore} />
    );

    it("renders and matches the snapshot", () => {
      const component = renderer.create(
        <Modal.wrappedComponent modalStore={mockModalStore} />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("calls hideModal method when close button is clicked", () => {
      component.find("Button").simulate("click");
      expect(mockModalStore.hideModal).toHaveBeenCalled();
    });
  });

  describe("when show is false and body is null", () => {
    const mockModalStore = {
      modal: { show: false, body: null },
      hideModal: jest.fn()
    };
    const component = shallow(
      <Modal.wrappedComponent modalStore={mockModalStore} />
    );

    it("returns null", () => {
      expect(component.getElement()).toBe(null);
    });
  });
});
