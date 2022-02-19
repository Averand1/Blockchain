// https://eth-ropsten.alchemyapi.io/v2/KMxp4Hg0Ench73cCtMMDT1s74FPtVDaB


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: ' https://eth-ropsten.alchemyapi.io/v2/KMxp4Hg0Ench73cCtMMDT1s74FPtVDaB',
      accounts:  ['b082e3001a4951e9b537ee6612b739537801e3263bb218f80d816c3d0205ae13']
    }
  }
}