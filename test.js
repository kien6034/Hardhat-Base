const { ethers } = require("ethers");


// run mainnet fork using gananche cli 
// ganache-cli https://rinkeby.infura.io/v3/19355cf427f249d8869198626b8bc859 --networkId 999
const provider = new ethers.providers.JsonRpcBatchProvider(`http://127.0.0.1:8545`);


(async()=>{
    //get the current signer 
    signer = provider.getSigner();
    console.log(`Current signer is: ${await signer.getAddress()}`);
    console.log(`Balance: ${await signer.getBalance() / 1000000000000000000}`)
    //Signer: https://docs.ethers.io/v5/api/signer/

    //hashing: https://docs.ethers.io/v5/api/utils/hashing/
    let hash = ethers.utils.solidityKeccak256(["string", "uint256"],["hello", 1]); // = hashing the string 
    console.log(hash)
})();

