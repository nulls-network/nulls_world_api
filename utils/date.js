const ethers = require("ethers")

let  date = {};


date.getBlockTimeMillisecond = async function(){
    const provider = new ethers.providers.JsonRpcProvider("https://http-testnet.hecochain.com/");
    const block = await provider.getBlock();
    return  block.timestamp*1000;
}

date.getBlockTime = async function(){
    const provider = new ethers.providers.JsonRpcProvider("https://http-testnet.hecochain.com/");
    const block = await provider.getBlock();
    return  block.timestamp;
}

// async  function test(){
//     let time =await  date.getBlockTime();
//     console.log("xxxxxxxxx",time);
// } 

// test();



module.exports = date;

