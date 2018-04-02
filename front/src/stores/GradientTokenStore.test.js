import GradientTokenStore from "./GradientTokenStore";

describe("GradientTokenStore", () => {
  describe("setup", () => {
    it("sets owner and fetches tokens", async () => {
      const mockGradientTokenInstance = {
        tokensOf: jest.fn().mockReturnValue([]),
        owner: jest.fn().mockReturnValue("test")
      };
      const mockContractsStore = {
        gradientTokenInstance: mockGradientTokenInstance
      };

      const gradientTokenStore = new GradientTokenStore(mockContractsStore);
      await gradientTokenStore.setup();
      expect(gradientTokenStore.owner).toEqual("test");
      expect(mockGradientTokenInstance.tokensOf).toBeCalledWith("test");
    });
  });

  describe("fetchTokens", async () => {
    const mockGradientTokenInstance = {
      tokensOf: jest.fn().mockReturnValue([0]),
      getGradient: jest.fn().mockReturnValue(["#000", "#fff"]),
      owner: jest.fn().mockReturnValue("test")
    };
    const mockContractsStore = {
      gradientTokenInstance: mockGradientTokenInstance
    };

    const gradientTokenStore = new GradientTokenStore(mockContractsStore);
    await gradientTokenStore.fetchTokens();
    expect(gradientTokenStore.tokens[0].gradient[0]).toEqual("#000");
    expect(gradientTokenStore.tokens[0].gradient[1]).toEqual("#fff");
  });

  describe("mintToken", async () => {
    const mockGradientTokenInstance = {
      tokensOf: jest.fn().mockReturnValue([]),
      mint: jest.fn(),
      owner: jest.fn()
    };
    const mockContractsStore = {
      gradientTokenInstance: mockGradientTokenInstance
    };

    const gradientTokenStore = new GradientTokenStore(mockContractsStore);
    await gradientTokenStore.mintToken();
    expect(gradientTokenStore.tokens).toHaveLength(1);
  });
});
