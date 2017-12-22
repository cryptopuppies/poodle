var Puppies = artifacts.require('Puppies');

console.log(1);

contract('Puppies', function(accounts){

    console.log(2);

    it("should return puppies", async function(){

        console.log(0)

        var instance = await Puppies.deployed();

        var puppies = instance.puppies.call(accounts[0])
        console.log('puppies:', puppies);
    });


});