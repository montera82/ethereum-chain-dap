"use strict";

let Web3 = require('web3');
let Solc = require('solc');
let fs = require('fs');

let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

let sourceCode = fs.readFileSync('greetings.sol').toString();

let compiledCode = Solc.compile(sourceCode);

let contractABI = JSON.parse(compiledCode.contracts[':Greetings'].interface);

let byteCode = compiledCode.contracts[':Greetings'].bytecode;

let greetingsContract = web3.eth.contract(contractABI);

let greetingsDeployed = greetingsContract.new(
  {
    data: byteCode,
    from: web3.eth.accounts[0],
    gas: 420000
  });

console.log(greetingsDeployed.addresss);
