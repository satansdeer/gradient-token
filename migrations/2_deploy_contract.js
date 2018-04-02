const GradientToken = artifacts.require("GradientToken");

module.exports = async function(deployer) {
  const gradientToken = await deployer.deploy(GradientToken);
};
