require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/c71e3763c19946d08763a84cd4624236',
      accounts: [privateKey],
    },
  },
  solidity: "0.8.17",
};
