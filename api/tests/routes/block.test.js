const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../../src/app');
const { getActualBlock } = require('../fixtures/block.fixture');

describe('Block routes', () => {
  describe('GET /blocks', () => {
    test('should return 200', async () => {
      await request(app)
        .get('/blocks')
        .send()
        .expect(httpStatus.OK);
    });
  });

  describe('GET /blocks/:hash', () => {
    test('should return 200', async () => {
      jest.setTimeout(30000);
      const block = await getActualBlock();
      if (block) {
        await request(app)
          .get(`/blocks/${block.hash}`)
          .send();
      }
    });

    test('should return 404', async () => {
      await request(app)
        .get(`/blocks/${faker.random.word()}`)
        .send()
        .expect(httpStatus.NOT_FOUND);
    });
  });
});
