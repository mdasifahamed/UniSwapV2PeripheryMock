require("dotenv").configDotenv();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.6.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 2000,
    },
  },
  networks: {
    sepolia: {
      url: process.env.testnet_url,
      accounts: [process.env.private_key],
    },
  },
  etherscan: {
    apiKey: process.env.ether_scan_api,
  },
};
