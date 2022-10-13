const { ethers } = require("hardhat");

async function main() {
  const nftContract = await ethers.getContractFactory("GameItem");
  const deployedNftContract = await nftContract.deploy();
  await deployedNftContract.deployed();
  console.log("NFT Contract Address:", deployedNftContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });  