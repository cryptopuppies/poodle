pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Puppies.sol";

contract TestPuppies {

  // this is deployed contract
  Puppies puppies = Puppies(DeployedAddresses.Puppies());


  function testCreateRandomPuppy() {

    // this is with a new puppies contract
    Puppies p = new Puppies();

    bytes32 name = 'puppy1';
    p.createRandomPuppy(name);


    Assert.notEqual(p.getCountofPuppies(),0, 'should not be empty');
    bytes32 newName;
    uint256 newDna;
    (newName ,newDna) = p.getPuppy(0);
    Assert.equal(newName,"puppy1", 'should be puppy1');

  }



}
