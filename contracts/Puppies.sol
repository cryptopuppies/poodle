pragma solidity ^0.4.18;

contract Puppies {

  uint dnaDigits = 16;
  uint dnaModulus = 10 ** dnaDigits;

  event PuppyCreated(uint puppyId, bytes32 name, uint dna);

  struct Puppy{
    bytes32 name;
    uint dna;
  }

  Puppy[] public puppies;

  function _createPuppy(bytes32 _name, uint _dna) private {
    uint id = puppies.push(Puppy(_name, _dna));
    PuppyCreated(id, _name, _dna);
  }

  function _generateRandomDna(bytes32 _str) private view returns(uint){
    uint rand = uint(keccak256(_str));
    return rand % dnaModulus;
  }

  function createRandomPuppy(bytes32 _name) public {
    uint randDna = _generateRandomDna(_name);
    _createPuppy(_name, randDna);
  }

  function getPuppies() public view returns (Puppy[]){
    return puppies;
  }

}
