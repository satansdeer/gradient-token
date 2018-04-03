import ModalStore from "./ModalStore";

describe("ModalStore", () => {
  it("has modal.show false and body null by default", () => {
    const modalStore = new ModalStore();
    expect(modalStore.modal.show).toBeFalsy();
    expect(modalStore.modal.body).toBeNull();
  });

  describe("showModal", () => {
    it("sets modal.show to true and assigns body to modal.body", () => {
      const modalStore = new ModalStore();
      modalStore.showModal("test");
      expect(modalStore.modal.show).toBeTruthy();
      expect(modalStore.modal.body).toEqual("test");
    });
  });

  describe("hideModal", () => {
    it("sets modal.show to false and assigns null to modal.body", () => {
      const modalStore = new ModalStore();
      modalStore.showModal("test");
      modalStore.hideModal();
      expect(modalStore.modal.show).toBeFalsy();
      expect(modalStore.modal.body).toBeNull();
    });
  });
});
