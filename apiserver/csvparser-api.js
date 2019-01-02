require('dotenv').config()
const appName = 'csvparser.api';
const express = require('express');
const bodyParser = require('body-parser');
const Mydebbuger = require('debug')(appName);
const Sentry = require('@sentry/node');
const app = express();
const port = process.env.CSVPARSER_API_PORT || process.env.SETUP_CVPARSER_API_PORT; //obtain the PORT for the service

const routes = require('./routes/routes');
Sentry.init({ dsn: process.env.sentry_csvparser_node });


Mydebbuger('Attempting to start server listening on port:', port);

// start the server
const server = app.listen(port, (err) => {
  if(err) {
    Mydebbuger('Error at server creation: ', err);
    process.exit(1);
  } else {
    Mydebbuger('csvparser-api server listening port: ', port);
  }
});

Mydebbuger('Adding middlewares to our server');

try{
  // midlewares
  app.use((req, res, next) => {
    Mydebbuger('App is in use, got called with this URL: ', req.url, ' and request method', req.method);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Request-Method', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
} catch (e2) {
  Mydebbuger('Error adding middlewares for server creations: ', e2);
}
// routes
try {
  Mydebbuger('We are now calling routes.');
  routes(app);
} catch (e) {
  Mydebbuger('Error in route assignment for server creations: ', e);
}

module.exports = server;
