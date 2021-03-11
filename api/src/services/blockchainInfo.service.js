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
  try {
    const response = await axios.get(url);
    blockDetails = response.data;  
  }
  catch (e) {
    throw new ApiError(httpStatus.NOT_FOUND, e.response.data);
  }

  return blockDetails;
};

module.exports = {
  queryBlocks,
  getBlockByHash,
};
