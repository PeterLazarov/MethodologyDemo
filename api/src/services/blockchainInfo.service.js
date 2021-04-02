const httpStatus = require('http-status');
const axios = require('axios');
const integrationRoutes = require('../config/integrationRoutes');
const ApiError = require('../utils/ApiError');

// eslint-disable-next-line no-unused-vars
const queryBlocks = async (filter, options) => {
  const response = await axios.get(integrationRoutes.blockchainInfoGetBlocks);
  const blockData = response.data.blocks;

  return blockData;
};

const getBlockByHash = async (hash) => {
  const url = `${integrationRoutes.blockchainInfoGetBlockByHash}/${hash}`;

  let blockDetails = {};
  await axios.get(url)
    .then((response) => {
      blockDetails = response.data;
    })
    .catch((error) => {
      throw new ApiError(httpStatus.NOT_FOUND, error.response.data);
    });

  return blockDetails;
};

module.exports = {
  queryBlocks,
  getBlockByHash,
};
