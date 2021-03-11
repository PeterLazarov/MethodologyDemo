const httpStatus = require('http-status');
const _ = require('lodash');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { blockchainInfoService } = require('../services');
const texts = require('../texts');

const getBlocks = catchAsync(async (req, res) => {
  const filter = _.pick(req.query, ['name', 'role']);
  const options = _.pick(req.query, ['sortBy', 'limit', 'page']);

  const result = await blockchainInfoService.queryBlocks(filter, options);

  res.send(result);
});

const getBlock = catchAsync(async (req, res) => {
  const block = await blockchainInfoService.getBlockByHash(req.params.hash);
  if (!block) {
    throw new ApiError(httpStatus.NOT_FOUND, texts.blockNotFoundError);
  }
  res.send(block);
});

module.exports = {
  getBlocks,
  getBlock
};
