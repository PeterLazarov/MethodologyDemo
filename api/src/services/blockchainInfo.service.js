const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const axios = require('axios');

const queryBlocks = async (filter, options) => {
  const response = await axios.get(`${'https://blockchain.info'}${'/blocks?format=json'}`);
  const blockData = response.data.blocks;
  
  return blockData;
};

const getBlockByHash = async (hash) => {
  const url = `${'https://blockchain.info'}${'/rawblock/'}${hash}`;

  let blockDetails = {};
  await axios.get(url)
    .then(function (response) {
      blockDetails = response.data;  
    })
    .catch(function (error) {
      throw new ApiError(httpStatus.NOT_FOUND, error.response.data);
    })

  return blockDetails;
};

module.exports = {
  queryBlocks,
  getBlockByHash,
};
