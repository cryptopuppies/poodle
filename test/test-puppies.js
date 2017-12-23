var Puppies = artifacts.require('Puppies');

console.log(1);

contract('Puppies', function(accounts){

    console.log(2);

    it("should return puppies", async function(){

        console.log(0)

        let instance = await Puppies.deployed();

        let puppies = await instance.getCountofPuppies.call();

        console.log('puppies:', puppies.toString());

    });


});
