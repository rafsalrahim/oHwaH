const Token = artifacts.require("MyToken");

var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN=require("chai-bn")(BN);
chai.use(chaiBN);


var chaiasPromised =require("chai-as-promised");
chai.use(chaiasPromised);
const expect = chai.expect;

contract("Token Test", async (accounts)=>{

    it("all tokens should be in my acc", async ()=>{
        let instance = await Token.deployed();
        let totalSupplay = await instance.totalSupply();
        //let balance = await instance.balanceOf(accounts[0]);
        //assert.equal(balance.valueOf(), initialSupplay.valueOf(),"The balance was not same");
        expect( instance.balanceOf(accounts[0])).to.eventually.be.a.bignumber.equal(totalSupplay);
    })
});