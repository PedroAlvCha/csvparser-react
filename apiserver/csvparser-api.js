const appName = 'csvparser-api';
const express = require('express');
const bodyParser = require('body-parser');
const Mydebbuger = require('debug')(appName);

const app = express();
const port = process.env.CSVPARSER_API_PORT || process.env.SETUP_CVPARSER_API_PORT; //obtain the PORT for the service

const routes = require('./routes/routes');

// start the server
const server = app.listen(port, (err) => {
  if(err) {
    Mydebbuger('Error at server creation: ', err);
    process.exit(1);
  } else {
    Mydebbuger('server on listen port: ', port);
  }
});


// midlewares
app.use((req, res, next) => {
  Mydebbuger('URL: ', req.url, '-', req.method);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
try {
  routes(app);
} catch (e) {
  Mydebbuger('error in the creation of server: ', e);
}

module.exports = server;
