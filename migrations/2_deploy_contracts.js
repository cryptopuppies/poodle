var Puppies = artifacts.require("Puppies.sol");

module.exports = function(deployer) {
    deployer.deploy(Puppies);
};