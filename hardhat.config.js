require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const projectId = "89c583c8e557446eb6ed26293c856eb0";
const privateKey = process.env.PRIVATE_KEY0.toString()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
