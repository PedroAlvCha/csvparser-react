const csvParserController = require('../controllers/CsvParserController');

module.exports = (router) => {
  router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


  // routes

  router.get('/', csvParserController.getCsvParser);
  router.post('/import ', csvParserController.uploadCsvFile);
  router.post('/search', csvParserController.getSearchResults);
  router.get('*', csvParserController.getNotRouteValid);
  router.post('*', csvParserController.getNotRouteValid);
};
