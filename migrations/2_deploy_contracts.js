const Qalam = artifacts.require("./Qalam.sol");

module.exports = function(deployer) {
  deployer.deploy(Qalam);
};