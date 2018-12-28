const appName = 'csvParser.routes';
const Mydebbuger = require('debug')(appName);
const csvParserController = require('../controllers/CsvParserController');

module.exports = (router) => {
  try {
    router.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  } catch (e) {
    Mydebbuger('Error in router creation: ', e);
  }

    // routes
  try {
    router.get('/', csvParserController.getCsvParser);
  } catch (e) {
    Mydebbuger('Error adding GET routes: ', e);
  }
  
  try {
    router.post('/import ', csvParserController.uploadCsvFile);
    router.post('/search', csvParserController.getSearchResults);
    //router.get('*', csvParserController.getNotRouteValid);
    //router.post('*', csvParserController.getNotRouteValid);
  } catch (e) {
    Mydebbuger('Error adding POST routes: ', e);
  }
};