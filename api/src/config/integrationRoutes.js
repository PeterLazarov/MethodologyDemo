const blockchainInfoAddress = 'https://blockchain.info';

module.exports = {
  blockchainInfoAddress,
  blockchainInfoGetBlocks: `${blockchainInfoAddress}/blocks?format=json`,
  blockchainInfoGetBlockByHash: `${blockchainInfoAddress}/rawblock`,
};
