const request = require('supertest');
const app = require('../../csvparser-api');

describe('Request of the route GET method', () => {
  afterEach(() => {
    app.close();
  });

  it('Should answer a status 200', () => {
    request(app).get('/')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.statusCode).not.toBe(404);
      });
  });

  it('Should return a string', () => {
    request(app).get('/')
      .then((res) => {
        expect(res.text).toBe('Csv Parser API...!');
        expect(typeof res.text).toBe('string');
        expect(typeof res.text).not.toBe('undefined');
      });
  });
});

describe('Request of the route: not Valid', () => {
  afterEach(() => {
    app.close();
  });

  it('Should return route Invalid for the GET method', () => {
    request(app).get('/ThisIsAnInvalidRoute')
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.statusCode).not.toBe(200);
        expect(res.text).toBe('Invalid Route, does not Exist.');
        expect(typeof res.text).toBe('string');
        expect(typeof res.text).not.toBe('undefined');
      });
  });

  it('Should return route Invalid for the POST method', () => {
    request(app).post('/ThisIsAnInvalidRoute')
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.statusCode).not.toBe(200);
        expect(res.text).toBe('Invalid Route, does not Exist.');
        expect(typeof res.text).toBe('string');
        expect(typeof res.text).not.toBe('undefined');
      });
  });
});
