const Joi = require('joi');

const getBlock = {
  params: Joi.object().keys({
    hash: Joi.string(),
  }),
};

module.exports = {
  getBlock
};
