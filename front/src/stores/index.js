import ContractsStore from "./ContractsStore";
import GradientTokenStore from "./GradientTokenStore";
import ModalStore from "./ModalStore";

const modalStore = new ModalStore();

const contractsStore = new ContractsStore();
contractsStore.setup();

const gradientTokenStore = new GradientTokenStore(contractsStore);

export default {
  modalStore,
  contractsStore,
  gradientTokenStore
};
