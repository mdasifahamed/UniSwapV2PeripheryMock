const { ethers } = require("hardhat");

async function deployRouter2() {
  const contractInstance = await ethers.getContractFactory("UniswapV2Router02");
  const factoryAddress = "0xe27eD3412469eD2C1FAD33d5B053Afc866a37634";
  const WETH = "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9";
  const routerContract = await contractInstance.deploy(factoryAddress, WETH);
  const routerAddress = await routerContract.getAddress();
  console.log(`Router Contract Address: ${routerAddress}`);
}

deployRouter2().catch((error) => {
  console.log(error);
  process.exit(1);
});
