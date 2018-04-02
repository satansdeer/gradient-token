import ContractsStore from "./ContractsStore";
import getGradientContractInstance from "utils/getGradientContractInstance";

jest.mock("utils/getGradientContractInstance", () => {
  return jest.fn().mockImplementation(() => {
    return {};
  });
});

describe.only("ContractsStore", () => {
  describe("setup", () => {
    it("initializes gradientToken contract instance", async () => {
      const contractsStore = new ContractsStore();
      await contractsStore.setup();
      expect(contractsStore.gradientTokenInstance).toBeTruthy();
    });
  });
});
