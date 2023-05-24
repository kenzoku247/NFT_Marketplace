require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:__dirname+'/.env.local'});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: process.env.NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${process.env.NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
