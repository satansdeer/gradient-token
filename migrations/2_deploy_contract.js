const GradientToken = artifacts.require("GradientToken");
const util = require("util");
const fs = require("fs");
const path = require("path");
const writeFile = util.promisify(fs.writeFile);

module.exports = async function(deployer) {
  const gradientToken = await deployer.deploy(GradientToken);
  const addresses = {
    tokenAddress: GradientToken.address
  };

  await writeFile(
    path.join(__dirname, "..", "front", "src", "addresses.json"),
    JSON.stringify(addresses)
  );
};
