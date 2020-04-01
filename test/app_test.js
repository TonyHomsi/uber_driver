const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('The express app', () => {
    it('Handless a GET request to /api', (done) => {
        request(app)
            .get('/api')
            .end((err, response) => {
                console.log(response);
                assert.equal(response.body.hi, 'tony');
                done();
            });
    });

});