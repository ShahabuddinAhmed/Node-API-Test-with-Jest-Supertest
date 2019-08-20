import { getUser } from '../controller/user';
const request = require('supertest');
const app = require('../../app');


describe('GET /user', function() {
    it('responds with json', (done) => {
        request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect(200);
        done();
    });
});