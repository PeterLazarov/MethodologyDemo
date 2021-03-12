const express = require('express');
const validate = require('../middlewares/validate');
const blockValidation = require('../validations/block.validation');
const blockController = require('../controllers/block.controller');

const router = express.Router();

router
  .route('/')
  .get(blockController.getBlocks);

router
  .route('/:hash')
  .get(validate(blockValidation.getBlock), blockController.getBlock);

module.exports = router;
