//Debugging Variables
const appName = 'csvParser.controller';
const Mydebbuger = require('debug')(appName);

//CSV parsing and file handling Elements
const csv = require('csv-parser')
const fs = require('fs')

//declare array to store multiple users
const usersArray = [];

const getCsvParser = (req, res) => {
  Mydebbuger('Calling getCsvParser');
  try {
    const myResponse = "Csv Parser API...!"
    res.status(404).send(myResponse);
  } catch (e) {
    Mydebbuger('error obtained in the getCsvParser: ', e);
  }
}

const uploadCsvFile = (req, res) => {
  Mydebbuger('Calling uploadCsvFile');
  let myResponse = "Upload CSV executed successfully";
  try {
	let myString = JSON.stringify(req.body);
    Mydebbuger('myString: ', myString);
	const paramCsv = req.body.csvFile;
	Mydebbuger('Csv Data received: ', paramCsv);
	
	if (typeof paramCsv === 'undefined'){
	  myResponse = "Invalid File Attempt";
	  Mydebbuger('paramCsv is undefined: ', paramCsv);	
	  res.status(404).send(myResponse);
	}else{
	  Mydebbuger('paramCsv is NOT undefined: ', paramCsv);
		fs.createReadStream(paramCsv)
		  .pipe(csv())
		  .on('data', (data) => usersArray.push(data))
		  .on('end', () => {
			console.log(usersArray);
		  });
       res.status(200).send(myResponse);
	}
  } catch (e) {
    Mydebbuger('error obtained in the uploadCsvFile: ', e);
  }
}

const getSearchResults = (req, res) => {
  Mydebbuger('Calling getSearchResults');
  try {
    const myResponse = "Getting Search results..."
    res.send(myResponse);
  } catch (e) {
    Mydebbuger('Error obtained in the getSearchResults: ', e);
  }
}

const postNotRouteValid = (req, res) => {
  Mydebbuger('Calling postNotRouteValid');
  try {
    const myResponse = "Invalid Route, does not Exist."
    res.send(myResponse);
  } catch (e) {
    Mydebbuger('Error obtained in the postNotRouteValid: ', e);
  }
}

const getNotRouteValid = (req, res) => {
  Mydebbuger('Calling getNotRouteValid');
  try {
    const myResponse = "Invalid Route, does not Exist."
    res.send(myResponse);
  } catch (e) {
    Mydebbuger('Error obtained in the getNotRouteValid: ', e);
  }
}

module.exports = {
  getCsvParser,
  getSearchResults,
  getNotRouteValid,
  uploadCsvFile,
  postNotRouteValid,
}
