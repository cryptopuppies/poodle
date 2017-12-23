var Puppies = artifacts.require('Puppies');

contract('Puppies', function(accounts){

    it("should return puppies", async function(){

        let instance = await Puppies.deployed();

        let count = await instance.getCountOfPuppies.call();

    });

});