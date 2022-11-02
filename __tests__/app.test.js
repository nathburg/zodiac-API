const request = require('supertest');
const app = require('../lib/app');
const { zodiac } = require('../lib/zodiac-data');

describe('zodiac routes', () => {
  it('/zodiac should return list of signs with name and id', async () => {
    const resp = await request(app).get('/zodiac');
    const expected = zodiac.map(sign => { 
      return { id: sign.id, name: sign.name };
    });
    expect(resp.body).toEqual(expected);
  });
});
