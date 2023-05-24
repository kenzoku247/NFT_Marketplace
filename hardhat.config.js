require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/MmIOTVPWOl0aDGLaM6vTrCWhB8kqBmUW",
      accounts: [
        `0x${"de9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0"}`,
      ],
    },
  },
};
