const blockchainInfoAddress = 'https://blockchain.info';

module.exports = {
  blockchainInfoAddress: blockchainInfoAddress,
  blockchainInfoGetBlocks: blockchainInfoAddress + '/blocks?format=json',
  blockchainInfoGetBlockByHash: blockchainInfoAddress + '/rawblock',
};
