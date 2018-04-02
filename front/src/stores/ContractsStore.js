import { observable, decorate, action } from "mobx";
import getGradientContractInstance from "utils/getGradientContractInstance";

class ContractsStore {
  gradientTokenInstance = null;

  async setup() {
    this.setGradientTokenInstance(await getGradientContractInstance());
  }

  setGradientTokenInstance(gradientTokenInstance) {
    this.gradientTokenInstance = gradientTokenInstance;
  }
}

export default decorate(ContractsStore, {
  gradientTokenInstance: observable,
  setGradientTokenInstance: action
});
