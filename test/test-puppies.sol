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



    Assert.isNotEmpty(p.getPuppies(), 'should not be empty');

  }



}