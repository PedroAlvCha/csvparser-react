const appName = 'csvParserController';
const Mydebbuger = require('debug')(appName);

const getCsvParser = (req, res) => {
  try {
    const myResponse = "Csv Parser API...!"
    res.status(404).send(myResponse);
  } catch (e) {
    Mydebbuger('error obtained in the getCsvParser: ', e);
  }
}

const uploadCsvFile = (req, res) => {
  try {
    const myResponse = "Upload CSV file..."
    res.status(404).send(myResponse);
  } catch (e) {
    Mydebbuger('error obtained in the uploadCsvFile: ', e);
  }
}

const getSearchResults = (req, res) => {
  try {
    const myResponse = "Getting Search results..."
    res.send(myResponse);
  } catch (e) {
    Mydebbuger('Error obtained in the getSearchResults: ', e);
  }
}

const getNotRouteValid = (req, res) => {
  try {
    const myResponse = "Invalid Route, does not Exist."
    res.send(myResponse);
  } catch (e) {
    Mydebbuger('Error obtained in the getNotRouteValid: ', e);
  }
}

module.exports = {
  getCsvParser,
  getNotRouteValided,
}
