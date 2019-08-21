import { getUser } from '../controller/user';
const request = require('supertest');
const app = require('../../app');


describe('GET /user', () => {
    it('responds with json', async (done) => {
      await request(app)
        .get('/user')
        .expect(200);
        done();
    });
});