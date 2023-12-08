
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545")); //connect to RPC provider


const Exchange = require ('./build/Exchange.json');


// const instance = new web3.eth.Contract
const instance =  new web3.eth.Contract(
    JSON.parse(Exchange.interface), //ABI
    // '0x726C48B1A650010959911998986988b7831a'  
    //'0x19D4b1F5E439a43614168A17B3f0F3C0Ed2c3121'
    //"0xbBdB1a4B8E0b017c82EdBe719A9bcb69AE23d1fD"
    "0x3cb527c547df9A738c568292A8383FFC99f7F65E"
                                                  
);

module.exports = instance;