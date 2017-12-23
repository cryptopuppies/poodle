var Puppies = artifacts.require('Puppies');

contract('Puppies', function(accounts){



    it("should return no puppies", async function(){
        let instance = await Puppies.deployed();
        let count = await instance.getCountOfPuppies();
        assert.equal(count, 0);
    });

    it("should create a puppy", async function(){
        let instance = await Puppies.deployed();
        var name = 'puppy1';
        await instance.createRandomPuppy(name);
        let count = await instance.getCountOfPuppies();
        assert.equal(count, 1);


        // todo: not sure how to check the name of a puppy in js
        var response = await instance.getPuppy(0);
        console.log('response:', response);
        // assert.equal(response.name.toString(), 'puppy1');
    });



});