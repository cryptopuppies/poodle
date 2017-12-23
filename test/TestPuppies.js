var Puppies = artifacts.require('Puppies');

contract('Puppies', function (accounts) {
    let instance;
    let name = 'puppy1';

    beforeEach('new contract per test', async function () {
        instance = await Puppies.new(accounts[0]);
    });

    it('should return no puppies', async function () {
        let instance = await Puppies.deployed();
        let count = await instance.getCountOfPuppies();
        assert.equal(count, 0);
    });

    it('should create a puppy', async function () {
        let instance = await Puppies.deployed();
        await instance.createRandomPuppy(name);
        let count = await instance.getCountOfPuppies();
        assert.equal(count, 1);
    });

    // todo: not sure how to check the name of a puppy in js
    it('should have name puppy1', async function(){
        let instance = await Puppies.deployed();
        let response = await instance.getPuppy(0);
        console.log('response:', response);
        // assert.equal(response.name.toString(), 'puppy1');
    });

    // you can grab existing instance with deployed
    it('should check existing contract', async function () {
        let instance = await Puppies.deployed();
        let count = await instance.getCountOfPuppies();
        assert.equal(count, 1);
    })

    // otherwise instance will be a newly generated contract by the before
    it('should check new contract', async function () {
        assert.equal(await instance.getCountOfPuppies(), 0);
    })


});