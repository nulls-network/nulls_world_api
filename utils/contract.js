const Ethers = require("ethers")
const {NonceManager} = require("@ethersproject/experimental");
const config = require("../config/config")


const BaseAbiPath = "./abi/"
const Contracts = {}
let Provider;
const Wallet = {}


function getAbi( filename ) {
    return require(`${BaseAbiPath}${filename}`).abi 
}

function getInterface( filename ) {
    return new Ethers.utils.Interface(getAbi(filename) )
}

function getProvider( rpcAddress ){
    if( !Provider ) {
        Provider = new Ethers.providers.JsonRpcProvider( rpcAddress || config.chain.network )
    }
    return Provider
}


async function getWalletByPrivate( prikey ) {
    let wallet = Wallet[ prikey ]
    if( !wallet ) {
        wallet = new Ethers.Wallet( prikey , getProvider() )
        if( wallet ) {
            Wallet[ await wallet.getAddress() ] = wallet 
            Wallet[ prikey ] = wallet 
        } 
    }
    return wallet 
}

function getContract( filename , wallet ) {
    const addresses = config.chain.contract_address 
    let entity = Contracts[ filename ] 
    if( !entity ){
        const abi = getAbi(filename)
        const provider = getProvider()
        entity = new Ethers.Contract( addresses[filename] , abi , provider )
        if( wallet ) {
            entity.connect(wallet)
        }
        Contracts[filename] = entity 
    } 
    return entity 
} 



function getWalletContract(filename,wallet){
    const addresses =config.chain.contract_address 
    let entity = Contracts[ filename ] 
    if( !entity ){
        const abi = getAbi(filename)
        const managedSigner = new NonceManager(wallet);
        entity = new Ethers.Contract( addresses[filename] , abi , managedSigner )
        Contracts[filename] = entity 
    } 
    return entity 
}

module.exports = {
    getWalletByPrivate,
    getContract,
    getWalletContract
}