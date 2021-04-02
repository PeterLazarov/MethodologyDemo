const request = require('supertest');
const app = require('../../src/app');

const getActualBlock = async () => {
  const blocksRes = await request(app).get('/blocks');
  const blocks = blocksRes.body;

  let block;
  if (blocks.length > 0) {
    // eslint-disable-next-line prefer-destructuring
    block = blocks[0];
  }
  return block;
};

module.exports = {
  getActualBlock,
};
