const request = require('supertest');
const { app } = require('../server');

describe('health endpoint', () => {
  it('returns ok payload', async () => {
    const response = await request(app).get('/healthz');
    expect(response.statusCode).toBeLessThan(500);
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('uptime');
  });
});


