import ContractsStore from "./ContractsStore";
import GradientTokenStore from "./GradientTokenStore";

const contractsStore = new ContractsStore();
contractsStore.setup();

const gradientTokenStore = new GradientTokenStore(contractsStore);

export default {
  contractsStore,
  gradientTokenStore
};
