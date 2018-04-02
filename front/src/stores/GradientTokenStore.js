import { observable, action, decorate, when } from "mobx";
import randomColor from "utils/randomColor";

class GradientTokenStore {
  tokens = [];
  owner = null;
  isLoading = true;
  tokenIndex = 0;

  constructor(contractsStore) {
    this.contractsStore = contractsStore;
    when(() => this.contractsStore.gradientTokenInstance, this.setup);
  }

  setup = async () => {
    const { gradientTokenInstance } = this.contractsStore;
    const owner = await gradientTokenInstance.owner();
    this.setOwner(owner);
    this.fetchTokens();
  };

  fetchTokens = async () => {
    const { gradientTokenInstance } = this.contractsStore;
    const tokens = await gradientTokenInstance.tokensOf(this.owner);
    const gradients = await Promise.all(
      tokens.map(async token => {
        return gradientTokenInstance.getGradient(token);
      })
    );
    this.setIsLoading(false);
    if (!gradients.length) {
      return;
    }
    this.setTokens(this.indexedTokens(gradients));
  };

  indexedTokens(gradients) {
    return gradients.map(gradient => {
      return {
        gradient,
        index: this.tokenIndex++
      };
    });
  }

  mintToken = async () => {
    const { gradientTokenInstance } = this.contractsStore;
    const gradient = [randomColor(), randomColor()];
    await gradientTokenInstance.mint(gradient[0], gradient[1], {
      from: this.owner,
      gas: 170000
    });
    this.appendToken({ gradient, index: this.tokenIndex++ });
  };

  setTokens(tokens) {
    this.tokens.replace(tokens);
  }

  appendToken(token) {
    this.tokens.push(token);
  }

  setOwner(owner) {
    this.owner = owner;
  }

  setIsLoading(value) {
    this.isLoading = value;
  }
}

export default decorate(GradientTokenStore, {
  owner: observable,
  tokens: observable,
  isLoading: observable,
  setOwner: action,
  setTokens: action,
  setIsLoading: action,
  appendToken: action
});
