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
  it('returns full sign data by id at /zodiac/:id', async () => {
    const resp = await request(app).get('/zodiac/1');
    expect(resp.body).toEqual({
      'id': '1',
      'name': 'aquarius',
      'dates': 'Jan 21 - Feb 19',
      'symbol': 'Water Bearer'
    });
  });
  it('returns horoscope for /horoscopes/leo', async () => {
    const resp = await request(app).get('/horoscopes/leo');
    expect(resp.text).toEqual('narcissist');
  });
});
